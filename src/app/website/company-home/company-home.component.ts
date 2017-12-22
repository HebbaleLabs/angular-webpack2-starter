import { Component } from '@angular/core';

@Component({
  selector: 'tf-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.css']
})
export class CompanyHomeComponent {
  navBarType = 'For Companies';
  page = 'ProductCo';
  ourJobPartner = 'ProductCo';
  testimonialType = 'ProductCo';

}
