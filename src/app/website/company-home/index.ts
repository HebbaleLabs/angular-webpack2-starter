import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { CompanyHomeComponent } from './company-home.component';
import { NavbarModule } from '../shared/navbar/index';
import { CaptionModule } from '../shared/caption/index';
import { FeatureSummaryModule } from './feature-summary/index';
import { ManyPosibilitiesModule } from './many-posibilities/index';
import { OurJobPartnersModule } from '../shared/our-job-partners/index';
import { SiteMapLinksModule } from '../shared/sitemap-links/index';
import { FooterModule } from '../shared/footer/index';
import { TestimonialsModule } from '../shared/testimonials/index';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CompanyHomeComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    NavbarModule,
    CaptionModule,
    FeatureSummaryModule,
    ManyPosibilitiesModule,
    OurJobPartnersModule,
    SiteMapLinksModule,
    FooterModule,
    TestimonialsModule
  ],
  providers: [],

  exports: [
    CompanyHomeComponent
  ]
})
export class CompanyHomeModule {

}
