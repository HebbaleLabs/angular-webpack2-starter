import { Subscription } from 'rxjs/Subscription';
import { TalfinderModel } from './tf-talfinder.model';
import { ContentfulConfig } from './../../contentful/tf-contentful.config';
import { ContentfulService } from './../../contentful/tf-contentful.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tf-talfinder',
  templateUrl: 'tf-talfinder.component.html'
})

export class TalfinderComponent implements OnInit, OnDestroy {
  talfinderData: TalfinderModel;
  private talfinderSubscription: Subscription;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.onGetTalfinder();
  }

  onGetTalfinder() {
    let entryId = ContentfulConfig.TalfinderLearnig_Entry;
    this.contentfulService.getTalfinder(entryId)
      .subscribe(
      talfinderData => this.talfinderData = talfinderData.fields,
      error => console.log(error),
      () => console.log('talfinder data getting sucessfully')
      );
  }

  ngOnDestroy() {
    this.talfinderSubscription.unsubscribe();
  }
}
