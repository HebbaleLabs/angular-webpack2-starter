import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {AllLinksComponent } from "./all-links.component";

import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    
    declarations:[
        AllLinksComponent,
    ],
    imports:[
      BrowserModule,
        HttpModule
    ],
    providers:[],
    exports:[
        AllLinksComponent,
        ]
})
export class AllLinksModule {

}
