import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { CommonModule } from "@angular/common";

import { BrowserModule } from "@angular/platform-browser";
import { PopularCoursesComponent } from './popular-courses.component';

@NgModule({
    
    declarations:[
        PopularCoursesComponent,
        

    ],
    imports:[
      BrowserModule,
        HttpModule
    ],
    providers:[],
    exports:[
        PopularCoursesComponent,
        ]
})
export class PopularCoursesModule {

}
