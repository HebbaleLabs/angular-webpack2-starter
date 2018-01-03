import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../contentful/contentful.service';


@Component({
  selector: 'tf-sitemap-links',
  templateUrl: './sitemap-links.component.html',
  styleUrls: ['./sitemap-links.component.scss']
})
export class SiteMapLinksComponent implements OnInit {
  contentData = [];
  toggle = false;
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.getContents();
  }
  getContents() {
    this.contentfulService.getSiteMapData()
      .subscribe(
      (data: any) => {
        for (let item of data.items) {
          this.contentData.push(item.fields);
        }
      });
  } onToggle() {
    this.toggle = !this.toggle;
  }
}


