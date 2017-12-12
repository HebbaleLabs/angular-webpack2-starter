import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css']
})
export class CaptionComponent implements OnInit {

  contentData={};
  constructor(private http:Http) { }

  ngOnInit() {
    this.getContents();
    
  }
  getData(){
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=courseHomePageCaption')
          .map(
            (response:Response)=>{
              const data=response.json();
              return data;

            }
          )
  }

  getContents(){
    this.getData()
            .subscribe(
              (data:any)=>{
                for(let item of data.items){
                  this.contentData=item
                }
                
              }

            )

    
  }

}