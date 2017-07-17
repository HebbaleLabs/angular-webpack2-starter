import { Config } from './../../config';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ContentfulService {
  constructor(private http: Http) { }

  buildUrl(entryId: string) {
    return Config.Base_API_URL + Config.SPACE_ID + Config.ENTRIES +
      entryId + Config.ACESS_TOKEN + Config.API_KEY;
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
