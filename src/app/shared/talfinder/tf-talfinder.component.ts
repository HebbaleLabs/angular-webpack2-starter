import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { TalfinderModel } from './tf-talfinder.model';
import { ContentfulConfig } from './../../contentful/tf-contentful.config';
import { ContentfulService } from './../../contentful/tf-contentful.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tf-talfinder',
  templateUrl: 'tf-talfinder.component.html',
  styleUrls: ['./tf-talfinder.component.scss']
})

export class TalfinderComponent implements OnInit, OnDestroy {
  talfinderData: TalfinderModel;
  private talfinderSubscription: Subscription;
  private ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.onGetTalfinder();
  }

  onGetTalfinder() {
    let entryId = ContentfulConfig.TalfinderLearnig_Entry;
    this.contentfulService.getTalfinder(entryId)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
      talfinderData => this.talfinderData = talfinderData.fields,
      error => console.log(error),
      () => console.log('talfinder data getting sucessfully')
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
