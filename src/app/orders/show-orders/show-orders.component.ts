import { Component, OnInit } from '@angular/core';
import {Order, OrdersService} from "../Services/orders.service";
import {TableColumn} from "../../shared/tables/tables.component";

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.scss']
})
export class ShowOrdersComponent implements OnInit {

  orders: Order[] = [];

  columns: TableColumn[] = [
    {
      key: 'amount',
      label: 'Amount'
    },
    {
      key: 'description',
      label: 'Description'
    },
    {
      key: 'payment_status',
      label: 'Payment Status'
    },
    {
      key: 'quantity',
      label: 'Quantity'
    },
  ];

  constructor(private orderService:OrdersService) {
    this.orderService.getItems().subscribe(orders => {
      this.orders = orders
    })
  }

  ngOnInit(): void {
  }

  deleteOrder(id:number){
    this.orderService.deleteItem(id).subscribe( res => {
      window.location.reload()
    })
  }

}
