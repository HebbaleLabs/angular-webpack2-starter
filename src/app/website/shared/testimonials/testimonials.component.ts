import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../contentful/contentful.service';


@Component({
  selector: 'tf-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() page = '';
  contentData = {};
  // The time to show the next photo
  private nextPhotoInterval: number = 5000;
  // Looping or not
  private noLoopSlides: boolean = false;


  constructor(private http: Http,
    private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.getContents(this.page);

  }

  getContents(page) {
    this.contentfulService.getTestimonialData()
      .subscribe(
      (data: any) => {

        for (let item of data.items) {

          if (item.fields.pageName === page) {
            this.contentData = getValue(item);
          }

        }
        function getValue(item) {
          let sectionHeading = item.fields.sectionTitle;
          let testimonials = [];
          for (let entryRefernce of item.fields.testimonials) {
            testimonials.push(getDetails(entryRefernce));
          }
          function getDetails(entryRefernce) {
            let entryValue = data.includes.Entry.find(getEntry);
            let assetValue = data.includes.Asset.find(getAsset);


            function getEntry(entry) {
              return entry.sys.id === entryRefernce.sys.id;
            }
            function getAsset(asset) {
              console.log(entryValue);
              return asset.sys.id === entryValue.fields.profilePhoto.sys.id;
            }
            return { entryValue, assetValue };

          }
          return { sectionHeading, testimonials };
        }

        console.log(this.contentData);
      }

      );


  }

}
