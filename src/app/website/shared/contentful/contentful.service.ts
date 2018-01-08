import { Observable } from 'rxjs/Observable';

import { ContentfulConfig } from './contentful.config';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { SafeResourceUrl } from '@angular/platform-browser';
@Injectable()
export class ContentfulService {
  private url: SafeResourceUrl;
  constructor(private http: Http,
    private contentfulConfig: ContentfulConfig) { }

  buildURL(contentTypeId: string) {
    return ContentfulConfig.BASE_API_URL + ContentfulConfig.SPACE_ID
      + ContentfulConfig.ENTRIES + ContentfulConfig.ACCESS_TOKEN
      + ContentfulConfig.API_KEY + ContentfulConfig.INCLUDE_LEVEL
      + ContentfulConfig.CONTENT_TYPE + contentTypeId;
  }

  getFromContentful(url: string): Observable<any> {
    return this.http.get(url)
      .map(res => res.json());
  }


  public getPossibilitiesData(): any {
    const requestURL = this.buildURL(this.contentfulConfig.MANY_POSIBILITIES);
    return this.getFromContentful(requestURL);
  }
  getJobpartnerData(): any {
    const requestURL = this.buildURL(this.contentfulConfig.OUR_JOB_PARTNER);
    return this.getFromContentful(requestURL);
  }
  getFeatureSummaryData() {
    const requestURL = this.buildURL(this.contentfulConfig.FEATURE_SUMMARY);
    return this.getFromContentful(requestURL);
  }

  getSiteMapData() {
    const requestURL = this.buildURL(this.contentfulConfig.SITEMAP);
    return this.getFromContentful(requestURL);
  }


  getCaptionData() {
    const requestURL = this.buildURL(this.contentfulConfig.CAPTION);
    return this.getFromContentful(requestURL);
  }

  getNavbarData() {
    const requestURL = this.buildURL(this.contentfulConfig.NAVBAR);
    return this.getFromContentful(requestURL);
  }



  getTestimonialData() {
    const requestURL = this.buildURL(this.contentfulConfig.TESTIMONIAL);
    return this.getFromContentful(requestURL);
  }



  getPopularCoursesData() {
    const requestURL = this.buildURL(this.contentfulConfig.POPULAR_COURSE);
    return this.getFromContentful(requestURL);
  }


  getWhyLearnWithUsData() {
    const requestURL = this.buildURL(this.contentfulConfig.WHY_LEARN);
    return this.getFromContentful(requestURL);
  }


}
