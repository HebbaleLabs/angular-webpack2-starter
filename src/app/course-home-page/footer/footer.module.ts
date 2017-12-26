import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {FooterComponent } from "./footer.component";

import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    
    declarations:[
        FooterComponent,
    ],
    imports:[
      BrowserModule,
        HttpModule
    ],
    providers:[],
    exports:[
        FooterComponent,
        ]
})
export class FooterModule {

}
