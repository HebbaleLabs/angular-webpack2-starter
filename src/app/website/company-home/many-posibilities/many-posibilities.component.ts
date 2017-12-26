import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ContentfulService } from '../../shared/contentful/contentful.service';


@Component({
  selector: 'tf-many-posibilities',
  templateUrl: './many-posibilities.component.html',
  styleUrls: ['./many-posibilities.component.scss']
})
export class ManyPosibilitiesComponent implements OnInit {

  contentData = {};
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }


  ngOnInit() {
    this.getContents();
  }

  getContents() {
    this.contentfulService.getPossibilitiesData()
      .subscribe(
      (data: any) => {

        this.contentData = getValue(data.items[0]);
        function getValue(item) {
          let possiblityItems = [];
          const sectionHeading = item.fields.sectionHeader;
          const sectiDescription = item.fields.sectionDescription;

          for (const possibility of item.fields.possibilities) {
            possiblityItems.push(getEntry(possibility));
          }
          function getEntry(possibility) {

            function getItem(entry) {
              return entry.sys.id === possibility.sys.id;

            }
            return data.includes.Entry.find(getItem);

          }


          return { sectionHeading, possiblityItems };
        }
        console.log(this.contentData);
      }
      );

  }
}
