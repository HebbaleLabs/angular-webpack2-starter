import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { LearnerTestimonialsComponent } from './learner-testimonials.component';
import {CarouselComponent} from './carousel/carousel.component';
import {PrintSliderComponent} from './carousel/print-slider/print-slider.component';



@NgModule({
    
    declarations:[
        LearnerTestimonialsComponent,
        CarouselComponent,
        PrintSliderComponent
    ],
    imports:[
      BrowserModule,
        HttpModule
    ],
    providers:[],
    exports:[
        LearnerTestimonialsComponent,
        CarouselComponent,
        PrintSliderComponent

        ]
})
export class LearnerTestimonialsModule {

}
