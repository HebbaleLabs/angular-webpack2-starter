import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';

@Component({
  selector: 'app-our-job-partners',
  templateUrl: './our-jobpartners.component.html',
  styleUrls: ['./our-jobpartners.component.css']
})
export class OurJobPartnersComponent implements OnInit {
contentData=[];
  constructor(private http:Http) { }

  ngOnInit() {
    this.getContents();
    
  }
  getData(){
    return this.http.get('https://cdn.contentful.com/spaces/l99z1yyviltd/entries?access_token=5f91dcaac99947796b2f772dba878c5b58fab81d02375c7b9d3f26a9e3a0f45b&content_type=coursePageOurJobPartners')
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
                 

                
                         for (let item of data.items){
                
                                this.contentData.push(getValue(item))
                              }
                            
                                function  getValue(item){
                                let  companyName=item.fields.companyName;
                                let assetValue=data.includes.Asset.find(getAsset)
                                
                                
                                function getAsset(asset){
                                return asset.sys.id===item.fields.companyLogo.sys.id;
                                }
                                return {companyName,assetValue}
                    
                                }
                                console.log(this.contentData)    
                
            })
        }
    }
