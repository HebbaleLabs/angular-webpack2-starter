import { CompanyHomeComponent } from './company-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const compRoutes: Routes = [
  {
    path: '',
    component: CompanyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(compRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class CompanyHomeRoutingModule {
}
