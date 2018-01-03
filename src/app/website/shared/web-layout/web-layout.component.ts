import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-weblayout',
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss']

})

export class WebLayoutComponent {
  // tslint:disable-next-line:no-input-rename
  @Input() navBarType: string;
  @Input() pageCaptionType: string;
  @Input() pageTestimonialType: string;
  @Input() pageOurJobPartnerType: string;

}
