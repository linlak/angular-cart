import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Billing } from './../models/billing';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {
  shippings: Billing[];
  shipping: Billing;
  constructor(private http: HttpClient) {
    this.getshippings();
  }

  createshippings(data: Billing) {
    this.shippings.push(data);
  }

  getshippings(): Observable<Billing[]> {
    return this.http.get('/api/shippings').pipe(
      map((data: {shippings: Billing[]}) => {
        return data.shippings || [];
      })
    );
  }

  getshippingById(key: string): Observable<Billing> {
    return this.http.get('/api/products/' + key)
    .pipe(
      map((data: {shipping: Billing}) => {
        if (data.shipping) {
          return data.shipping;
        }
        return;
      })
    );
  }

  updateshipping(data: Billing) {
    // this.shippings.update(data.$key, data);
  }

  deleteshipping(key: string) {
    // this.shippings.remove(key);
  }
}
