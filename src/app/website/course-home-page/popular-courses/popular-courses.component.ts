import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../../shared/contentful/contentful.service';

@Component({
  selector: 'tf-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent implements OnInit {
  contentData: any = { title: '', popularCoursesCards: [] };
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.getContents();

  }
  getContents() {
    this.contentfulService.getPopularCoursesData()
      .subscribe(
      (data: any) => {
        this.contentData.title = data.items[0].fields.title;
        data.items[0].fields.popularCoursesCards.forEach(item => {
          let entVal: any;
          let assetVal: any;
          entVal = data.includes.Entry.find(entry => {
            return entry.sys.id === item.sys.id;
          });
          assetVal = data.includes.Asset.find(asset => {
            return asset.sys.id === entVal.fields.courseThumbnail.sys.id;
          });
          this.contentData.popularCoursesCards.push({ entVal, assetVal });
        });
      });
  }
}
