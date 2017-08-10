import { PanelModule } from './../pannel/tf-panel.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployementComponent } from './tf-employement.component';

@NgModule({
  imports: [CommonModule, PanelModule],
  exports: [EmployementComponent],
  declarations: [EmployementComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployementModule { }
