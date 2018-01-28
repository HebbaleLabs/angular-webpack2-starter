import { Component } from '@angular/core';
import { homePageService } from '../services/homepage.service';
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    responseImage : any;
    responseText : any;
    responseContent : any;
    contentTypeResponse : any;
    menutabs : any;
    talfinderlogo : String;
    assets : String;
    
    constructor(public entriesAssestService : homePageService){}
    ngOnInit(){
        this.entriesAssestService .getResponseContent().subscribe(
            (response) => 
            {
               
                this.contentTypeResponse = response.json();
                this.menutabs = this.contentTypeResponse.items[0].fields.menuTabs;
                this.talfinderlogo = this.contentTypeResponse.includes.Asset[0].fields.file.url;
            }
        );
    }
}