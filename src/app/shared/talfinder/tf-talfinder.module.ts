import { PanelModule } from './../pannel/tf-panel.module';
import { PanelComponent } from './../pannel/tf-panel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TalfinderComponent } from './tf-talfinder.component';

@NgModule({
  imports: [CommonModule, PanelModule],
  exports: [TalfinderComponent],
  declarations: [TalfinderComponent],
  providers: [],
})
export class TalfinderModule { }
