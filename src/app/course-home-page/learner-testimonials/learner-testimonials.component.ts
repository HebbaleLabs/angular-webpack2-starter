import { Component, OnInit } from '@angular/core';
import { Http,Response} from '@angular/http';

@Component({
  selector: 'app-learner-testimonials',
  templateUrl: './learner-testimonials.component.html',
  styleUrls: ['./learner-testimonials.component.css']
})
export class LearnerTestimonialsComponent implements OnInit {
  
  contentData={title:"",testimonials:[]};
  constructor(private http:Http) { }

  ngOnInit() {
    this.getContents();
    
  }
  getData(){
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=courseHomeLearnerTestimonials')
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
                this.contentData.title=data.items[0].fields.sectionTitle;
                
               for (let item of data.items[0].fields.testimonials){

               
                this.contentData.testimonials.push(getVal(item))
              }
            function  getVal(item){
             let entVal=data.includes.Entry.find(getEntry)
              let assetVal=data.includes.Asset.find(getAsset)
              
              
             function getEntry(entry){
               return entry.sys.id===item.sys.id;
             }
             function getAsset(asset){
               return asset.sys.id===entVal.fields.profilePhoto.sys.id
             }
             return {entVal,assetVal}

            }  

                console.log(this.contentData)
              }

            )

    
  }

}
