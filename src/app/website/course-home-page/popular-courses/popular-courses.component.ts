import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../../shared/contentful/contentful.service';

@Component({
  selector: 'tf-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent implements OnInit {
  contentData = { title: '', PopularCoursesCards: [] };
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

        for (let item of data.items[0].fields.popularCoursesCards) {

          this.contentData.PopularCoursesCards.push(getValue(item));
        }
        function getValue(item) {
          let entVal = data.includes.Entry.find(getEntry);
          let assetVal = data.includes.Asset.find(getAsset);


          function getEntry(entry) {
            return entry.sys.id === item.sys.id;
          }
          function getAsset(asset) {
            return asset.sys.id === entVal.fields.courseThumbnail.sys.id;
          }
          return { entVal, assetVal };

        }

      }

      );


  }

}
