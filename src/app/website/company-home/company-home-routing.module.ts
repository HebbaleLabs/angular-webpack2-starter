import { CompanyHomeComponent } from './company-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const compARoutes: Routes = [
  {
    path: '',
    component: CompanyHomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(compARoutes)],
  exports: [RouterModule],
  declarations: []
})
export class CompanyHomeRoutingModule {
}
