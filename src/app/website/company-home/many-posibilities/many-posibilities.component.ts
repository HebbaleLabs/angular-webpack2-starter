import { ManyPossibilitiesModel } from './../company-home.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-many-posibilities',
  templateUrl: './many-posibilities.component.html',
  styleUrls: ['./many-posibilities.component.scss']
})
export class ManyPosibilitiesComponent {
  @Input() displayModel: ManyPossibilitiesModel;
}
