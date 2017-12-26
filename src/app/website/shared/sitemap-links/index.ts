import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SiteMapLinksComponent } from './sitemap-links.component';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SiteMapLinksComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    exports: [
        SiteMapLinksComponent,
    ]
})
export class SiteMapLinksModule {

}
