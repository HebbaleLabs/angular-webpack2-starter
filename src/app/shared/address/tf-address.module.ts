import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './tf-address.component';

@NgModule({
  imports: [CommonModule],
  exports: [AddressComponent],
  declarations: [AddressComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddressModule { }
