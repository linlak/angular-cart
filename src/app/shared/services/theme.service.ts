import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  defaultTheme(): void {
      const theme = localStorage.getItem('theme');
      if (theme) {
        document.getElementsByTagName('body')[0].className = JSON.parse(theme);
      }
  }

  updateThemeUrl(theme: string) {

    document.getElementsByTagName('body')[0].className = theme;

    localStorage.setItem('theme', JSON.stringify(theme));
  }
}
