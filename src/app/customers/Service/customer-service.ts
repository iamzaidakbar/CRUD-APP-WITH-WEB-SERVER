import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BaseCrudService, BaseItem } from 'src/app/BASE_CRUD_SERVICE';

export interface Customer  extends BaseItem{
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseCrudService<Customer> {


  constructor(public http: HttpClient) {
    super(http);
  }

  get suffix(): string {
    return 'customers';
  }


}
