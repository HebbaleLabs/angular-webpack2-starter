import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../contentful/contentful.service';


@Component({
  selector: 'tf-sitemap-links',
  templateUrl: './sitemap-links.component.html',
  styleUrls: ['./sitemap-links.component.scss']
})
export class SiteMapLinksComponent implements OnInit {
  contentData: any[] = [];
  toggle: boolean = false;
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.getContents();
  }
  getContents() {
    this.contentfulService.getSiteMapData()
      .subscribe(
      (data: any) => {
        const catagoryModelMap = {};

        const urlmodelMap = {};
        const dataModel = {};
        data.items['0'].fields.sitemapEntries.forEach(catagoryId => {
          catagoryModelMap[catagoryId.sys.id] = dataModel;

        });

        Object.keys(catagoryModelMap).forEach(catagoryId => {
          const linkModelMap = {};
          const entryData = data.includes.Entry.find(entry => entry.sys.id === catagoryId);
          const linkdataModel = {
            sitemapCategory: entryData.fields.sitemapCategory,
            sitemapEntries: entryData.fields.sitemapEntries,
            links: []
          };
          const linkModel = {};
          entryData.fields.sitemapEntriesUrl.forEach(entry => {
            linkModelMap[entry.sys.id] = linkModel;
          });
          catagoryModelMap[catagoryId] = linkdataModel;
          this.contentData.push(linkdataModel);
          Object.keys(linkModelMap).forEach(linkId => {
            const linkData = data.includes.Entry.find(elements => elements.sys.id === linkId);
            catagoryModelMap[catagoryId].links.push(linkData.fields);
          });
        });
      });
    console.log(this.contentData);


  }

  onToggle() {
    this.toggle = !this.toggle;
  }


}
