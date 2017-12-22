import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { CourseHomePageComponent } from './course-home-page/course-home-page.component';
import { CompanyHomeComponent } from './company-home/company-home.component';


const websiteRoutes: Routes = [
  { path: '', component: WebsiteComponent },
  { path: 'Home', component: WebsiteComponent },
  { path: './For Learners', component: CourseHomePageComponent },
  { path: './For Companies', component: CompanyHomeComponent }
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
