import { ImageService } from './../services/image.service';
import { Component } from '@angular/core';
@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    responseImage : any;
    imgUrl : String;
    constructor(public imageService : ImageService){}
    ngOnInit(){
        this.imageService.getImage().subscribe(
            (response) => 
            {
                this.responseImage = response.json();
                this.imgUrl =this.responseImage.fields.file.url;
                console.log(this.responseImage.fields.file.url);
                console.log(this.imgUrl);
            },
            (Error) => console.log(Error)
        );
    }
    
}