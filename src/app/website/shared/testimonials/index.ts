import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { TestimonialsComponent } from './testimonials.component';
import { Carousel } from './carousel.component';
import { Slide } from './slide.component';
import { CommonModule } from '@angular/common';


@NgModule({

    declarations: [
        TestimonialsComponent,
        Carousel,
        Slide
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        TestimonialsComponent,

    ]
})
export class TestimonialsModule {

}
