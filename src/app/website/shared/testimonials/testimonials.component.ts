import { CaptionComponent } from './../caption/caption.component';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../contentful/contentful.service';


@Component({
  selector: 'tf-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  @Input() page: string = '';
  contentData: any = {};

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
        let testimonials: any[] = [];
        let sectionTitle: string = '';
        let cta: string = '';
        const ctaMap = {};
        const testimonialMap = {};
        const assetMap = {};
        data.items.forEach(item => {
          const dataModel = {};
          if (item.fields.pageName === page) {
            sectionTitle = item.fields.sectionTitle;
            ctaMap[item.fields.cta.sys.id] = dataModel;
            item.fields.testimonials.forEach(element => {
              testimonialMap[element.sys.id] = dataModel;

            });
          }
        });
        Object.keys(ctaMap).forEach(ctaId => {
          const ctaData = data.includes.Entry.find(entry => {
            return entry.sys.id === ctaId;
          });

          const dataModel = ctaMap[ctaId];
          cta = ctaData.fields.label;
        });
        Object.keys(testimonialMap).forEach(testimonialId => {
          const testimonialEntry: any = data.includes.Entry
            .find(entry => entry.sys.id === testimonialId);

          const dataModel = testimonialMap[testimonialId];
          const entryModel = {
            name: testimonialEntry.fields.name,
            testimonial: testimonialEntry.fields.testimonial,
            designation: testimonialEntry.fields.designation,
            image: ''
          };
          assetMap[testimonialEntry.fields.profilePhoto.sys.id] = entryModel;
          testimonials.push(entryModel);
        });
        Object.keys(assetMap).forEach(assetId => {
          const assetData = data.includes.Asset
            .find(asset => asset.sys.id === assetId);
          assetMap[assetId].image = assetData.fields.file.url;

          this.contentData = { cta, testimonials, sectionTitle };
        });
      });
  }
}
