import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CommonModule } from '@angular/common';

import { FeatureSummaryComponent } from './feature-summary.component';

@NgModule({
    declarations: [
        FeatureSummaryComponent,
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        FeatureSummaryComponent,
    ]
})
export class FeatureSummaryModule {

}
