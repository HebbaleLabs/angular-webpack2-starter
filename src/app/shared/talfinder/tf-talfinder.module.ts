import { PanelModule } from './../pannel/tf-panel.module';
import { PanelComponent } from './../pannel/tf-panel.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalfinderComponent } from './tf-talfinder.component';

@NgModule({
  imports: [CommonModule, PanelModule],
  exports: [TalfinderComponent],
  declarations: [TalfinderComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TalfinderModule { }
