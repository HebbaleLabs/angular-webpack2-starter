import { Component } from "@angular/core";
import { homePageService } from "../services/homepage.service";
@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.scss']
})
export class ProductComponent {
    productlabel:String;
    
    corparatetrainingimageurl:String;
    corparatetrainingsegmenttitle:String;
    corparatetrainingsegmentDescription:String;

    learningtoolimageurl:String;
    learningtoolsegmenttitle:String;
    learningtoolsegmentDescription:String;

    hiringtoolurl:String;
    hiringtoolsegmenttitle:String;
    hiringtoolsegmentDescription:String;

    talfindergrowthmarketurl:String;
    talfindergrowthmarketsegmenttitle:String;
    talfindergrowsegmentDescription:String;
    
    constructor(public productservice : homePageService){}
    ngOnInit(){
        this.productservice.getProductResponse().subscribe(
            (response) => 
            {
                this.productlabel = response.json().items[0].fields.sectionHeader;
                console.log(response.json());
                this.corparatetrainingimageurl =response.json().includes.Asset[0].fields.file.url;
                this.corparatetrainingsegmenttitle = response.json().includes.Entry[0].fields.segmentTitle;
                this.corparatetrainingsegmentDescription=response.json().includes.Entry[0].fields.segmentDescription;
                
                this.learningtoolimageurl =response.json().includes.Asset[3].fields.file.url;
                this.learningtoolsegmenttitle = response.json().includes.Entry[1].fields.segmentTitle;
                this.learningtoolsegmentDescription=response.json().includes.Entry[1].fields.segmentDescription;
                
                 this.hiringtoolurl=response.json().includes.Asset[2].fields.file.url;
                 this.hiringtoolsegmenttitle= response.json().includes.Entry[2].fields.segmentTitle;
                 this.hiringtoolsegmentDescription=response.json().includes.Entry[2].fields.segmentDescription;
                
                 this.talfindergrowthmarketurl = response.json().includes.Asset[1].fields.file.url;
                 this.talfindergrowthmarketsegmenttitle=response.json().includes.Entry[3].fields.segmentTitle;
                 this.talfindergrowsegmentDescription=response.json().includes.Entry[3].fields.segmentDescription;
            }
        );
    }
}