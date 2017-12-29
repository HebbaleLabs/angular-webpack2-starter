import { CourseHomePageComponent } from './course-home-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const compARoutes: Routes = [
  {
    path: '',
    component: CourseHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(compARoutes)],
  exports: [RouterModule],
  declarations: []
})
export class CourseHomePageRoutingModule {
}
