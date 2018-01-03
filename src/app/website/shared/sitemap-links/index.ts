import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { SiteMapLinksComponent } from './sitemap-links.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        SiteMapLinksComponent,
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        SiteMapLinksComponent,
    ]
})
export class SiteMapLinksModule {

}
