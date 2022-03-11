import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { CreateOrderComponent } from './create-order/create-order.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    CreateOrderComponent,
    ShowOrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
