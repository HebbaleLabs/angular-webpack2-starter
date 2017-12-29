import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ManyPosibilitiesComponent } from './many-posibilities.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ManyPosibilitiesComponent,
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [],
  exports: [
    ManyPosibilitiesComponent,
  ]
})
export class ManyPosibilitiesModule {

}
