import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { CourseHomePageComponent } from './course-home-page/course-home-page.component';
import { CompanyHomeComponent } from './company-home/company-home.component';


const websiteRoutes: Routes = [
  { path: './for-learners', loadChildren: './course-home-page/index#CourseHomePageModule' },
  { path: './for-companies', component: CompanyHomeComponent }
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
