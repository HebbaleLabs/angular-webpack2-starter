import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpModule } from '@angular/http';

import {CourseHomePageComponent} from './course-home-page.component'

import { NavbarModule } from './navbar/navbar.module';

import {CaptionModule} from './caption/caption.module';
import {PopularCoursesModule} from './popular-courses/popular-courses.module'
@NgModule({
  declarations: [
   CourseHomePageComponent
],
  imports: [
    BrowserModule,
    HttpModule,
    NavbarModule,
    CaptionModule,
    PopularCoursesModule
  ],
  providers: [],
  exports:[
      NavbarModule,
      CourseHomePageComponent
  ]
  
})
export class CourseHomePageModule { }
