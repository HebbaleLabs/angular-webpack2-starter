import { Http,RequestOptions,Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class NavBarService {
    constructor(private http : Http){}
/*
    getImage(){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/assets/3t8zc5aVAA0KUqyimquuaA?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b',options);
    }
    getText()
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries/10QIm9qnvKoeKS8KGQC8ma?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b',options);
    }*/
    getResponseContent()
    {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=navBar',options);
    }
}