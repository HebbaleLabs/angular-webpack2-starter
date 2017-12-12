import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.css']
})
export class PopularCoursesComponent implements OnInit {
contentData={title:"",PopularCoursesCards:[]};
  constructor(private http:Http) { }

  ngOnInit() {
    this.getContents();
    
  }
  getData(){
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=coursesPagePopularCourses')
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
                this.contentData.title=data.items[0].fields.title;
                

                
               for (let item of data.items[0].fields.popularCoursesCards){

                this.contentData.PopularCoursesCards.push(getVal(item))
              }
            function  getVal(item){
             let entVal=data.includes.Entry.find(getEntry)
             let assetVal=data.includes.Asset.find(getAsset)
              
              
             function getEntry(entry){
               return entry.sys.id===item.sys.id;
             }
             function getAsset(asset){
               return asset.sys.id===entVal.fields.courseThumbnail.sys.id
             }
             return {entVal,assetVal}

            }  
                
              }

            )

    
  }

}
