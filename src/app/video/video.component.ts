import { homePageService } from './../services/homepage.service';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
@Component({
    selector:'app-video',
    templateUrl:'./video.component.html',
    styleUrls : ['./video.component.scss']
})
export class VideoComponent{
    constructor(public videoservice:homePageService){}
    ngOnInit(){
        
    }
}