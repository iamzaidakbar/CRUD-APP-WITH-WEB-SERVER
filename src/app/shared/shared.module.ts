import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './common/buttons/buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from './tables/tables.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FormsComponent,
    ButtonsComponent,
    TablesComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule
    ],
    exports: [
        FormsComponent,
        ButtonsComponent,
        TablesComponent
    ]
})
export class SharedModule { }
