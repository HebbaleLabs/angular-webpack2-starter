import { PanelModule } from './../pannel/tf-panel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployementComponent } from './tf-employement.component';

@NgModule({
  imports: [CommonModule, PanelModule],
  exports: [EmployementComponent],
  declarations: [EmployementComponent],
  providers: [],
})
export class EmployementModule { }
