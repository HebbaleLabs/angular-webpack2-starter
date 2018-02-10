import { data } from './../../mock-api/data';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Response } from 'express-serve-static-core';
@Injectable()
export class homePageService {
    constructor(private http: Http) {}
    getResponseContent() {
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=navBar');
    }
    getJumbotronResponse() {
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=home');
    }
    getProductResponse() {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=homeProductCards', options)
        .map( (response) => response.json());
    }
    getvideoresponse() {
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=homeVideo');
    }
    getcontactresponse() {
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=contactCtaSection');
    }
    getmapresponse() {
     return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries/6q0Q0UCBxYeqScws0kgSA8?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b');
    }
    getcontactinforesponse() {
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=contactInformation')
        .map((response => response.json()));
    }
    getfooterresponse() {
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=homeFooter')
        .map((response) => response.json());
    }
}
