import { FeatureSummaryDataModel } from '../company-home.model';
import { Component, Input } from '@angular/core';



@Component({
  selector: 'tf-feature-summary',
  templateUrl: './feature-summary.component.html',
  styleUrls: ['./feature-summary.component.scss']
})
export class FeatureSummaryComponent {
  @Input() displayModel: FeatureSummaryDataModel;
}

