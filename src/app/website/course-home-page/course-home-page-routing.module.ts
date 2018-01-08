import { CourseHomePageComponent } from './course-home-page.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const compRoutes: Routes = [
  {
    path: '',
    component: CourseHomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(compRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class CourseHomePageRoutingModule {
}
