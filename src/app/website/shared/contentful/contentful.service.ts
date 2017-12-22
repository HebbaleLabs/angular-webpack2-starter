import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ContentfulService {

  constructor(private http: Http) { }

  public getPossibilitiesData(): any {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=productCoPossibilities')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      },
      (err: any) => {
      }
      );
  }
  getJobpartnerData(): any {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=ourCustomers')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      }
      );
  }
  getFeatureSummaryData() {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=productCoFeatureSummary')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      },
      (err: any) => {
      }
      );
  }

  getSiteMapData() {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=sitemap')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      });
  }


  getCaptionData() {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=courseHomePageCaption')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      });
  }

  getNavbarData() {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=navBar')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      });
  }



  getTestimonialData() {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=courseHomeLearnerTestimonials')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      }
      );
  }



  getPopularCoursesData() {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=coursesPagePopularCourses')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      }
      );
  }


  getWhyLearnWithUsData() {
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=courseHomeWhyLearnWithTalFinder')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;

      }
      );
  }


}
