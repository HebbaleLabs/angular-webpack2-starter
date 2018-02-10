import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { homePageService } from '../services/homepage.service';
import { Url } from 'url';
@Component({
    selector: 'tf-jumbotron',
    templateUrl: './jumbotron.component.html',
    styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
    responseSloganContent: String;
    responseBreifTeaserContent: String;
    homeImageUrl: Url;
    constructor(public jumbotronservice: homePageService) { }
    ngOnInit() {
        this.jumbotronservice.getJumbotronResponse().subscribe(
            (response) => {
                response.json().items.forEach(element => {
                    this.responseSloganContent = element.fields.slogan;
                    this.responseBreifTeaserContent = element.fields.briefTeaser;
                });
                response.json().includes.Asset.forEach(element => {
                    this.homeImageUrl = element.fields.file.url;
                });
            }
        );
    }
}
