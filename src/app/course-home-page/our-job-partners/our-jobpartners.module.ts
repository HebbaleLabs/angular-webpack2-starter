import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { OurJobPartnersComponent } from './our-jobpartners.component';

@NgModule({
    
    declarations:[
        OurJobPartnersComponent,
        

    ],
    imports:[
      BrowserModule,
        HttpModule
    ],
    providers:[],
    exports:[
        OurJobPartnersComponent,
        ]
})
export class OurJobPartnersModule {

}