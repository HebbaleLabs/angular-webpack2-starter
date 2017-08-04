import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { EmployementModel } from './tf-employement.model';
import { ContentfulConfig } from './../../contentful/tf-contentful.config';
import { ContentfulService } from './../../contentful/tf-contentful.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'tf-employement',
  templateUrl: 'tf-employement.component.html',
  styleUrls: ['./tf-employement.component.scss']
})

export class EmployementComponent implements OnInit, OnDestroy {
  panelHeading = 'Employement Information';
  employementData: EmployementModel;
  private employementSubscription: Subscription;
  private ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(private contentfulService: ContentfulService) { }


  ngOnInit() {
    this.onGetEmployement();
  }

  onGetEmployement() {
    let entryId = ContentfulConfig.EMPOERING_EMPLOYABILITY_ENTRY;
    this.contentfulService.getEmployement(entryId)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
      employementData => this.employementData = employementData.fields,
      error => console.log(error),
      () => console.log('employement data getting sucessfully')

      );

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
