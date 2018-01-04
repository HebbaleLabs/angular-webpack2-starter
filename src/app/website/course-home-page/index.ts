import { CourseHomePageService } from './course-home-page.service';
import { WebsiteLayoutModule } from './../shared/web-layout/index';
import { CourseHomePageRoutingModule } from './course-home-page-routing.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CourseHomePageComponent } from './course-home-page.component';
import { CaptionModule } from '../shared/caption/index';
import { PopularCoursesModule } from './popular-courses/index';
import { WhyLearnModule } from './why-learn/index';
import { TestimonialsModule } from '../shared/testimonials/index';
import { OurJobPartnersModule } from '../shared/our-job-partners/index';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    CourseHomePageComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    CaptionModule,
    PopularCoursesModule,
    WhyLearnModule,
    TestimonialsModule,
    OurJobPartnersModule,
    WebsiteLayoutModule,
    CourseHomePageRoutingModule
  ],
  providers: [CourseHomePageService]
})
export class CourseHomePageModule { }
