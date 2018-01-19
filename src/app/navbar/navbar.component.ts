import { NavBarService } from './../services/navbar.service';
import { Component } from '@angular/core';
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    responseImage : any;
    responseText : any;
    responseContent : any;
    contentTypeResponse : any;
    homePageEntries : any;
    imgUrl : String;
    assets : String;
    constructor(public entriesAssestService : NavBarService){}
    ngOnInit(){
       /* this.imageService.getImage().subscribe(
            (response) => 
            {
                this.responseImage = response.json();
                this.imgUrl =this.responseImage.fields.file.url;
                console.log(this.responseImage.fields.file.url);
                console.log(this.imgUrl);
            },
            (Error) => console.log(Error)
        );
        this.imageService.getText().subscribe(
            (response) =>
            {
                this.responseText = response.json();
                this.responseContent = this.responseText.fields.menuTabs;
                console.log(this.responseText);
                console.log(this.responseContent);
            }
        );*/
        this.entriesAssestService .getResponseContent().subscribe(
            (response) => 
            {
                this.contentTypeResponse = response.json();
                this.homePageEntries = this.contentTypeResponse.items[0].fields.menuTabs;
                this.imgUrl = this.contentTypeResponse.includes.Asset[0].fields.file.url;
                console.log(this.contentTypeResponse);
                console.log(this.homePageEntries);
            }
        );
    }
    
}