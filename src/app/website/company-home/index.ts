import { WebsiteLayoutModule } from './../shared/web-layout/index';
import { CompanyHomeRoutingModule } from './company-home-routing.module';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CompanyHomeComponent } from './company-home.component';
import { CaptionModule } from '../shared/caption/index';
import { FeatureSummaryModule } from './feature-summary/index';
import { ManyPosibilitiesModule } from './many-posibilities/index';
import { OurJobPartnersModule } from '../shared/our-job-partners/index';
import { TestimonialsModule } from '../shared/testimonials/index';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CompanyHomeComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    CaptionModule,
    FeatureSummaryModule,
    ManyPosibilitiesModule,
    OurJobPartnersModule,
    WebsiteLayoutModule,
    TestimonialsModule,
    CompanyHomeRoutingModule
  ],
  providers: [],

  exports: [
    CompanyHomeComponent
  ]
})
export class CompanyHomeModule {

}
