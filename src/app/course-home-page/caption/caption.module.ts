import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { CaptionComponent } from './caption.component';

@NgModule({
    
    declarations:[
        CaptionComponent,
        

    ],
    imports:[
      BrowserModule,
        HttpModule
    ],
    providers:[],
    exports:[
        CaptionComponent,
        ]
})
export class CaptionModule {

}
