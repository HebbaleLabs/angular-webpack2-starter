import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarModule } from './shared/navbar/index';

import { WebsiteComponent } from './website.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { CourseHomePageModule } from './course-home-page/index';
import { CompanyHomeModule } from './company-home/index';
import { ContentfulService } from './shared/contentful/contentful.service';



@NgModule({
  declarations: [
    WebsiteComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    NavbarModule,
    CourseHomePageModule,
    CompanyHomeModule,
    WebsiteRoutingModule
  ],
  providers: [ContentfulService],
  exports: [
    WebsiteComponent,
  ]
})
export class WebsiteModule {

}
