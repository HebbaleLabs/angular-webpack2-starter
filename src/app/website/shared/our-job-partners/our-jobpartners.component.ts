import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../contentful/contentful.service';

@Component({
  selector: 'tf-our-job-partners',
  templateUrl: './our-jobpartners.component.html',
  styleUrls: ['./our-jobpartners.component.scss']
})
export class OurJobPartnersComponent implements OnInit {
  @Input() page: string;
  contentData = { sectionTitle: '', sectionData: [] };
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.getContents(this.page);

  }


  getContents(page) {
    this.contentfulService.getJobpartnerData()
      .subscribe(
      (data: any) => {



        for (let item of data.items) {

          if (item.fields.pageName === page) {
            this.contentData.sectionTitle = item.fields.sectionTitle;
            this.contentData.sectionData.push(getValue(item));

          }
        }

        function getValue(item) {

          let assetValue;
          item.fields.customerLogos.find(getCustomerDetails);
          function getCustomerDetails(customerId) {

            assetValue = data.includes.Asset.find(getAsset);


            function getAsset(asset) {
              return asset.sys.id === customerId.sys.id;
            }
            return assetValue;
          }

          return assetValue;

        }


      });
  }
}
