import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { OurJobPartnersComponent } from './our-jobpartners.component';
import { CommonModule } from '@angular/common';

@NgModule({

    declarations: [
        OurJobPartnersComponent
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    exports: [
        OurJobPartnersComponent
    ]
})
export class OurJobPartnersModule {

}
