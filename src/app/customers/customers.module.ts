import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ShowCustomerComponent } from './show-customer/show-customer.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CreateCustomerComponent,
    ShowCustomerComponent,
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    SharedModule,
  ]
})
export class CustomersModule { }
