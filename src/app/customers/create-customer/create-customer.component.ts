import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Customer, CustomerService} from "../Service/customer-service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})
export class CreateCustomerComponent implements OnInit {

  form = new FormGroup({
    id : new FormControl('',[]),
    name : new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(17)
    ]),
    phone : new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(11)
    ]),
    email : new FormControl('',[
      Validators.required,
      Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ]),
    address : new FormControl('',[
      Validators.required,
    ]),
    city : new FormControl('',[
      Validators.required
    ])
  })

  constructor(private customerService: CustomerService,private routingService: Router, private route : ActivatedRoute) {
    this.route.params.subscribe(( {id})=>{
      if(id){
        this.customerService.getItem(id).subscribe(resp => {
          this.form.patchValue(resp)
        })
      }
    })
  }



  ngOnInit(): void {
  }

 formSubmitted(event): void {
  const customers : Customer = this.form.value
   if(this.isEditMode()){
    this.customerService.updateItem(customers).subscribe(res => {
      this.routingService.navigateByUrl('show-customer').then(r => {})
    })
   }else {
    this.customerService.saveItem(customers).subscribe(res => {
    this.routingService.navigateByUrl('show-customer').then(r => {})
    } )
   }
 }

  isEditMode(): boolean{
    return !!this.form.get('id').value;
  }

}
