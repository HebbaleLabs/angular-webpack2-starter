import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarModule } from './shared/navbar/index';

import { WebsiteComponent } from './website.component';
import { WebsiteRoutingModule } from './website-routing.module';

import { ContentfulService } from './shared/contentful/contentful.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    WebsiteComponent
  ],
  imports: [
    HttpModule,
    CommonModule,
    WebsiteRoutingModule
  ],
  providers: [ContentfulService],
  exports: [
    WebsiteComponent,
  ]
})
export class WebsiteModule {

}
