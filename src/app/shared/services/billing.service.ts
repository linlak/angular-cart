import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Billing } from './../models/billing';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  billings: Billing[];
  billing: Billing;
  constructor(
    private http: HttpClient
    ) {
    this.getBillings();
  }

  createBillings(data: Billing) {
    this.billings.push(data);
  }

  getBillings(): Observable<Billing[]> {
    const req = this.http.get('api/billings').pipe(
      map((data: {billings: Billing[]}) => {
        this.billings = data.billings || [];
        return this.billings;
      })
    );
    return req;
  }

  getBillingById(key: string): Observable<Billing> {
    const req = this.http.get('/api/products/' + key)
    .pipe(
      map((data: {billing: Billing}) => {
        if (data.billing) {
          this.billing = data.billing;
          return data.billing;
        }
      })
    );

    return req;
  }

  updateBilling(data: Billing) {
    // this.billings.update(data.$key, data);
  }

  deleteBilling(key: string) {
    // this.billings.remove(key);
  }
}
