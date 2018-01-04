import { WhyLearnDisplayModel } from './../course-home-page.model';
import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { ContentfulService } from '../../shared/contentful/contentful.service';

@Component({
  selector: 'tf-why-learn',
  templateUrl: './why-learn.component.html',
  styleUrls: ['./why-learn.component.scss']
})
export class WhyLearnComponent {
  @Input() displayModel: WhyLearnDisplayModel;
}
