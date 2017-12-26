import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ContentfulService } from '../../shared/contentful/contentful.service';


@Component({
  selector: 'tf-feature-summary',
  templateUrl: './feature-summary.component.html',
  styleUrls: ['./feature-summary.component.scss']
})
export class FeatureSummaryComponent implements OnInit {

  contentData = [];
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }



  ngOnInit() {
    this.getContents();
  }

  getContents() {
    this.contentfulService.getFeatureSummaryData()
      .subscribe(
      (data: any) => {
        for (const item of data.items) {
          this.contentData.push(getValue(item));

        }

        function getValue(item) {
          const sectionHeading = item.fields.sectionHeader;
          const sectiDescription = item.fields.sectionDescription;
          const advantages = [];
          const assetValue = data.includes.Asset.find(getAsset);
          function getAsset(asset) {

            return asset.sys.id === item.fields.teaserImage.sys.id;

          }
          for (const advantage of item.fields.advantages) {
            advantages.push(getEntry(advantage));
          }
          function getEntry(advantage) {

            function getItem(entry) {
              return entry.sys.id === advantage.sys.id;

            }
            return data.includes.Entry.find(getItem);

          }


          return { sectionHeading, sectiDescription, advantages, assetValue };
        }

      }
      );

  }
}
