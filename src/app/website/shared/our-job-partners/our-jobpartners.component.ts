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
  contentData: any = { sectionTitle: '', sectionData: [] };
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }

  ngOnInit() {

    this.getContents(this.page);

  }


  getContents(page) {
    this.contentfulService.getJobpartnerData()
      .subscribe(
      (data: any) => {
        const dataModelMap = {};
        data.items.forEach(item => {
          if (item.fields.pageName === page) {
            const dataModel = {
            };
            this.contentData.sectionTitle = item.fields.sectionTitle;
            item.fields.customerLogos.forEach(logo => {
              console.log(logo.sys.id);
              dataModelMap[logo.sys.id] = dataModel;
              this.contentData.sectionData.push(dataModel);
              console.log(this.contentData);
            });
          }
        });

        Object.keys(dataModelMap).forEach(assetId => {
          const assetData = data.includes.Asset.find(asset => asset.sys.id === assetId);
          this.contentData.sectionData.push(dataModelMap[assetId].image = assetData.fields.file.url);
        });
      });
  }
}
