import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CourseHomePageComponent } from './course-home-page.component';
import { NavbarModule } from '../shared/navbar/index';
import { CaptionModule } from '../shared/caption/index';

import { PopularCoursesModule } from './popular-courses/index';
import { WhyLearnModule } from './why-learn/index';
import { TestimonialsModule } from '../shared/testimonials/index';
import { SiteMapLinksModule } from '../shared/sitemap-links/index';
import { FooterModule } from '../shared/footer/index';
import { OurJobPartnersModule } from '../shared/our-job-partners/index';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CourseHomePageComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    NavbarModule,
    CaptionModule,
    PopularCoursesModule,
    WhyLearnModule,
    TestimonialsModule,
    OurJobPartnersModule,
    SiteMapLinksModule,
    FooterModule
  ],
  providers: [],
  exports: [

    CourseHomePageComponent
  ]

})
export class CourseHomePageModule { }
