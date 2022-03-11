import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Order, OrdersService} from "../Services/orders.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  form: FormGroup = new FormGroup({
    id: new FormControl('',[]),
    amount: new FormControl('',[
      Validators.required
    ]),
    description: new FormControl('',[
      Validators.required
    ]),
    payment_status: new FormControl('',[
      Validators.required
    ]),
    customer_id: new FormControl('',[
      Validators.required
    ]),
    quantity: new FormControl('',[
      Validators.required
    ])
  })

  constructor(private orderService: OrdersService, private route: ActivatedRoute, private  router: Router) {
    this.route.params.subscribe( params => {
      const {id} = params
      if(id){
        this.orderService.getItem(id).subscribe(resp => {
          this.form.patchValue(resp)
        })
      }
    })
  }

  ngOnInit(): void {
  }

  isEditMode(): boolean{
    return !!this.form.get('id').value;
  }



  formSubmitted($event: MouseEvent) {
    const order: Order = this.form.value
    if(this.isEditMode()){
      this.orderService.updateItem(order).subscribe(res => {
        this.router.navigateByUrl('/show-orders').then(r => {})
      })
    }else{
      this.orderService.saveItem(order).subscribe(res => {
        this.router.navigateByUrl('/show-orders').then(r => {})
      })
    }
  }
}
