import { TalfinderModel } from './tf-talfinder.model';
import { Config } from './../../config';
import { ContentfulService } from './../../services/contentful/tf-contentful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-talfinder',
  templateUrl: 'tf-talfinder.component.html'
})

export class TalfinderComponent implements OnInit {
  talfinderData: TalfinderModel;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.onGetTalfinder();
  }

  onGetTalfinder() {
    let entryId = Config.TalfinderLearnig_Entry;
    this.contentfulService.getTalfinder(entryId)
      .subscribe(
      talfinderData => this.talfinderData = talfinderData,
      error => console.log(error),
      () => console.log('talfinder data getting sucessfully')
      );
  }
}
