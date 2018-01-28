import { Response } from '@angular/http';
import { Component } from '@angular/core';
import { homePageService } from '../services/homepage.service';
@Component({
    selector:'app-jumbotron',
    templateUrl:'./jumbotron.component.html',
    styleUrls : ['./jumbotron.component.scss']
    })
export class JumbotronComponent
{
    responseslogancontent:String;
    responsebrainteasercontent:String;
    homeImageUrl:any;
    constructor(public jumbotronservice: homePageService){}
    ngOnInit(){
        this.jumbotronservice.getJumbotronResponse().subscribe( 
            (response)=>
            {
               
                this.responseslogancontent=response.json().items[0].fields.slogan
                this.responsebrainteasercontent=response.json().items[0].fields.briefTeaser
                this.homeImageUrl= response.json().includes.Asset[0].fields.file.url
            }
        );
    }
}