import { WebLayoutComponent } from './web-layout.component';
import { FooterModule } from './../footer/index';
import { SiteMapLinksModule } from '../sitemap-links/index';
import { NavbarModule } from './../navbar/index';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [CommonModule,
    NavbarModule,
    SiteMapLinksModule,
    FooterModule
  ],
  declarations: [WebLayoutComponent],
  exports: [WebLayoutComponent]
})
export class WebsiteLayoutModule { }
