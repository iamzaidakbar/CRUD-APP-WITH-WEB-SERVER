import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseCrudService, BaseItem } from 'src/app/BASE_CRUD_SERVICE';
import {Observable} from "rxjs";


export interface Order extends BaseItem {
  amount: string;
  description: string;
  quantity: string;
  customer_id: string;
  payment_status: 'PAID' | 'COD' | 'CANCELLED';
}

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends BaseCrudService<Order>{

  constructor(public override http: HttpClient) {
    super(http)
  }

  get suffix(): string {
    return 'orders'
  }
}
