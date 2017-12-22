import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { WhyLearnComponent } from './why-learn.component';


@NgModule({
    declarations: [
        WhyLearnComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    exports: [
        WhyLearnComponent,
    ]
})
export class WhyLearnModule {

}
