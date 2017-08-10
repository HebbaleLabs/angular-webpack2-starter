import { PanelComponent } from './tf-panel.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  exports: [PanelComponent],
  declarations: [PanelComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PanelModule { }
