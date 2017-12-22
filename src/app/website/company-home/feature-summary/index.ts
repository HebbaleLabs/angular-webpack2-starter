import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FeatureSummaryComponent } from './feature-summary.component';

@NgModule({
    declarations: [
        FeatureSummaryComponent,
    ],
    imports: [
      BrowserModule,
        HttpModule
    ],
    providers: [],
    exports: [
        FeatureSummaryComponent,
        ]
})
export class FeatureSummaryModule {

}
