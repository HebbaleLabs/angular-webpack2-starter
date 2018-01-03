import { ContentfulConfig } from './contentful.config';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [CommonModule],
  providers: [ContentfulConfig]
})
export class ContentfulModule {
}
