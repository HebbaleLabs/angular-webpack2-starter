import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../contentful/contentful.service';


@Component({
  selector: 'tf-caption',
  templateUrl: './caption.component.html',
  styleUrls: ['./caption.component.css']
})
export class CaptionComponent implements OnInit {
  @Input() pageCaption;
  contentData = {};
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.getContents(this.pageCaption);

  }


  getContents(pageCaption) {
    this.contentfulService.getCaptionData()
      .subscribe(
      (data: any) => {
        this.contentData = data.items.find(getValue);
        function getValue(item) {
          return item.fields.page === pageCaption;
        }
      }

      );

  }
}
