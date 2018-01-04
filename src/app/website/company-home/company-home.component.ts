import { ManyPossibilitiesModel } from './company-home.model';
import { CompanyHomeService } from './company-home.service';
import { ContentfulService } from './../shared/contentful/contentful.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tf-company-home',
  templateUrl: './company-home.component.html',
  styleUrls: ['./company-home.component.scss']
})
export class CompanyHomeComponent implements OnInit {
  navBarMenuType = 'For Companies';
  page = 'ProductCo';
  ourJobPartner = 'ProductCo';
  testimonialType = 'ProductCo';

  manyPossibilitiesModel: ManyPossibilitiesModel;
  constructor(private http: Http,
    private contentfulService: ContentfulService,
    private companyHomeService: CompanyHomeService
  ) { }
  ngOnInit() {
    this.getManyPossibilitiesContents();
  }
  getManyPossibilitiesContents() {
    this.contentfulService.getPossibilitiesData()
      .subscribe(
      (data: any) => {

        this.manyPossibilitiesModel = this.companyHomeService.getPossibilities(data);

      });
  }
}
