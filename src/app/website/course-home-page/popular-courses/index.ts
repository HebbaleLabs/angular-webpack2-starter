import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { CommonModule } from '@angular/common';
import { PopularCoursesComponent } from './popular-courses.component';

@NgModule({
    declarations: [
        PopularCoursesComponent,

    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        PopularCoursesComponent,
    ]
})
export class PopularCoursesModule {

}
