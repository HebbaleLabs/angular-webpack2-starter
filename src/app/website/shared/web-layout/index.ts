import { CaptionModule } from './../caption/index';
import { OurJobPartnersModule } from './../our-job-partners/index';
import { WebLayoutComponent } from './web-layout.component';
import { FooterModule } from './../footer/index';
import { SiteMapLinksModule } from '../sitemap-links/index';
import { NavbarModule } from './../navbar/index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TestimonialsModule } from '../testimonials/index';
@NgModule({
  imports: [CommonModule,
    NavbarModule,
    SiteMapLinksModule,
    FooterModule,
    OurJobPartnersModule,
    TestimonialsModule,
    CaptionModule
  ],
  declarations: [WebLayoutComponent],
  exports: [WebLayoutComponent]
})
export class WebsiteLayoutModule { }
