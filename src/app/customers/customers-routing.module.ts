import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {ShowCustomerComponent} from "./show-customer/show-customer.component";

const routes: Routes = [
  { path : 'show-customer',
    component: ShowCustomerComponent
  },
  { path : 'update-customer/:id',
    component: CreateCustomerComponent
  },
  { path : 'create-customer',
    component: CreateCustomerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
