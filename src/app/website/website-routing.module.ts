import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CourseHomePageComponent } from './course-home-page/course-home-page.component';
import { WebsiteComponent } from './website.component';



const websiteRoutes: Routes = [
  {
    path: 'for-learners',
    loadChildren: './company-home/index#CompanyHomeModule'
  },
  {
    path: 'for-companies',
    loadChildren: './course-home-page/index#CourseHomePageModule'
  }
];


@NgModule(
  {
    imports: [
      CommonModule,
      RouterModule.forChild(websiteRoutes)
    ],
    exports: [
      RouterModule
    ]
  }
)
export class WebsiteRoutingModule {

}
