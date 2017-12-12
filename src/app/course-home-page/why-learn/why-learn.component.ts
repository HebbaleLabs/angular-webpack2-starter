import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx'


@Component({
  selector: 'app-why-learn',
  templateUrl: './why-learn.component.html',
  styleUrls: ['./why-learn.component.css']
})
export class WhyLearnComponent implements OnInit {
  contentData=[];

  
  constructor(private http:Http) { }

  ngOnInit() {
this.getContents();

}
  getData(){
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=courseHomeWhyLearnWithTalFinder')
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
                
               // console.log(data);
               for (let item of data.items){

                   this.contentData.push(getVal(item)) 
                  

                  }
                      function getVal(item:any){
                        let assetVal=data.includes.Asset.find(findAsset)
                      
                    //  this.some.push( {item,assetVal })
                        
          

                                function findAsset(asset) {
                                  return asset.sys.id === item.fields.teaserImage.sys.id;
           
             
                                  }

                        return {item,assetVal}

                       }
          
            
           // console.log(this.contentData)
          
              }
            
                
/*
                this.meetKodproContent=data.items[1];
                this.meetKpdproImg=data.includes.Asset.id==="38FdpCtiVqkywa6aY48wOg";*/
                
              

            )

    
  }

}
