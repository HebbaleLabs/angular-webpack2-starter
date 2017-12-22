import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer.component';

@NgModule({
    declarations: [
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    exports: [
        FooterComponent,
    ]
})
export class FooterModule {

}
