import { Component, OnInit } from '@angular/core';
import {Customer, CustomerService} from "../Service/customer-service";
import {TableColumn} from "../../shared/tables/tables.component";

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.scss']
})

export class ShowCustomerComponent implements OnInit {

  customers: Customer[] = [];

  columns: TableColumn[] = [
    { label: 'Name', key: 'name'},
    { label: 'Phone', key: 'phone'},
    { label: 'Email', key: 'email'},
    { label: 'Address', key: 'address'},
    { label: 'City', key: 'city'}
  ]

  constructor(private customerService: CustomerService) {
    this.customerService.getItems().subscribe(customers => {
      this.customers = customers
    })
  }

  ngOnInit(): void {
  }

  deleteCustomer(id: number) : void{
   if(confirm('Are you Sure!')){
     this.customerService.deleteItem(id).subscribe(res => {
       window.location.reload()
     })
   }
  }

}
