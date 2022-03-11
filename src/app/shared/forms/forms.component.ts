import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  @Input() control: FormControl | AbstractControl
  @Input() label: string
  @Input() placeholder: string
  @Input() type: string

  constructor() { }

  ngOnInit(): void {
  }

  showErrors() {
    const { dirty, touched, errors } = this.control
    return touched && dirty && errors
  }


}
