import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { CommonModule, NgFor } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { TestimonialsComponent } from './testimonials.component';
import { Carousel } from './carousel.component';
import { Slide } from './slide.component';


@NgModule({

    declarations: [
        TestimonialsComponent,
        Carousel,
        Slide
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    exports: [
        TestimonialsComponent,

    ]
})
export class TestimonialsModule {

}
