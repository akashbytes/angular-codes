import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReativeFromComponent } from './components/reative-from/reative-from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReativeFromComponent],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class ReactiveFormModule { }
