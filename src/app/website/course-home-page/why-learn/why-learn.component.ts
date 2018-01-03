import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { ContentfulService } from '../../shared/contentful/contentful.service';


@Component({
  selector: 'tf-why-learn',
  templateUrl: './why-learn.component.html',
  styleUrls: ['./why-learn.component.scss']
})
export class WhyLearnComponent implements OnInit {
  contentData = [];


  constructor(private http: Http,
    private contnetfulService: ContentfulService) { }

  ngOnInit() {
    this.getContents();

  }


  getContents() {
    this.contnetfulService.getWhyLearnWithUsData()
      .subscribe(
      (data: any) => {


        for (let item of data.items) {

          this.contentData.push(getValue(item));


        }
        function getValue(item: any) {
          let assetVal = data.includes.Asset.find(findAsset);





          function findAsset(asset) {
            return asset.sys.id === item.fields.teaserImage.sys.id;


          }

          return { item, assetVal };

        }




      }




      );


  }

}
