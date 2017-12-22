import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ManyPosibilitiesComponent } from './many-posibilities.component';

@NgModule({
  declarations: [
    ManyPosibilitiesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  exports: [
    ManyPosibilitiesComponent,
  ]
})
export class ManyPosibilitiesModule {

}
