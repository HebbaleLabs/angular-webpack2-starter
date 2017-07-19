import { ContentfulConfig } from './tf-contentful.config';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentfulService {
  constructor(private http: Http) { }

  buildUrl(entryId: string) {
    return ContentfulConfig.Base_API_URL + ContentfulConfig.SPACE_ID + ContentfulConfig.ENTRIES +
      entryId + ContentfulConfig.ACESS_TOKEN + ContentfulConfig.API_KEY;
  }

  getAddress(entryId: string) {
    let addressUrl = this.buildUrl(entryId);
    return this.http.get(addressUrl)
      .map(res => res.json());
  }

  getEmployement(entryId: string) {
    let employementUrl = this.buildUrl(entryId);
    return this.http.get(employementUrl)
      .map(res => res.json());
  }

  getTalfinder(entryId: string) {
    let talfinderUrl = this.buildUrl(entryId);
    return this.http.get(talfinderUrl)
      .map(res => res.json());
  }

}
