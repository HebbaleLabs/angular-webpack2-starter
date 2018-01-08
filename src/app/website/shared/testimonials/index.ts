import { SlideModule } from './slide/index';
import { CarouselModule } from './carousel/index';

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TestimonialsComponent } from './testimonials.component';
// import { Carousel } from './carousel/carousel.component';
// import { Slide } from './slide/slide.component';
import { CommonModule } from '@angular/common';


@NgModule({

    declarations: [
        TestimonialsComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        CarouselModule,
        SlideModule
    ],
    providers: [],
    exports: [
        TestimonialsComponent,

    ]
})
export class TestimonialsModule {

}
