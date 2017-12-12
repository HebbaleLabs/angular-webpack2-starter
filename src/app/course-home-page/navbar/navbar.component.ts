import { Component, OnInit } from '@angular/core';

import {Http,Response} from '@angular/http'
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
contentData={logo:{},menuitems:{}}


  
  constructor(private http:Http) { }

  ngOnInit(){
    this.getLogoUrl();
  }

  getLogo(){
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=navBar')
  }
  getLogoUrl(){
    this.getLogo()
    .subscribe(
      (response:Response)=>{
        const data=response.json();
        this.contentData.logo=data.includes.Asset[0];
        //console.log(this.assets);
       this.contentData.menuitems=data.items.find(getValues)
        function getValues(item){
          //console.log('-----HHHHHHH '+item.fields.navBarType)
           if(item.fields.navBarType === "For Companies")
            {
              return item;
            }
        }
        console.log(this.contentData)
        
      },
      (error)=>{
        //console.log(error);

      }
    )
  }
}
