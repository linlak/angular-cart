import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  data: any = {};
  constructor(private http: HttpClient, private titleService: Title) {}
  defaultLang(lang: string): Observable<{}> {
    let dLang = localStorage.getItem('lang');
    if (dLang) {
      dLang = JSON.parse(dLang);
    } else {
      dLang = lang;
    }
    return this.use(dLang);
  }
  use(lang: string): Observable<{}> {
    return new Observable<{}>(observer => {
      const langPath = `assets/i18n/${lang || 'en'}.json`;
      this.http.get<{}>(langPath).subscribe(
        translation => {
          localStorage.setItem('lang', JSON.stringify(lang));
          this.data = Object.assign({}, translation || {});
          this.titleService.setTitle(this.data['TITLE']);
          observer.next(this.data);
        },
        error => {
          localStorage.removeItem('lang');
          this.data = {};
          console.log('Error');
          observer.next(this.data);
        }
      );
    });
  }
}
