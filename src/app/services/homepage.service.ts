import { Http,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class homePageService {
    constructor(private http : Http){}
    getResponseContent()
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=navBar',options);
    }
    getJumbotronResponse()
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=home',options);
    }
    getProductResponse()
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=homeProductCards',options);
    }
    getvideoresponse()
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://www.youtube.com/embed/yU9rQ720qdw?showinfo=0&rel=0',options);
    }
}
