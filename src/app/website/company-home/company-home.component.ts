import { ManyPossibilitiesModel, FeatureSummaryDataModel } from './company-home.model';
import { CompanyHomeService } from './company-home.service';
import { ContentfulService } from './../shared/contentful/contentful.service';
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
  featureSummaryModel: FeatureSummaryDataModel;
  manyPossibilitiesModel: ManyPossibilitiesModel;
  constructor(private contentfulService: ContentfulService,
    private companyHomeService: CompanyHomeService
  ) { }
  ngOnInit() {
    this.getManyPossibilitiesContents();
    this.getFeatureSummaryContents();
  }
  getManyPossibilitiesContents() {
    this.contentfulService.getPossibilitiesData()
      .subscribe(
      (data: any) => {
        this.manyPossibilitiesModel = this.companyHomeService.getPossibilities(data);

      });
  }
  getFeatureSummaryContents() {
    this.contentfulService.getFeatureSummaryData()
      .subscribe(
      (data: any) => {
        this.featureSummaryModel = this.companyHomeService.getFeatureSummary(data);
      }
      );

  }
}
