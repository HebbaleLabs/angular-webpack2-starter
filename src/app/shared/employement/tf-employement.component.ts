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
  employementData: EmployementModel;
  private employementSubscription: Subscription;
  constructor(private contentfulService: ContentfulService) { }


  ngOnInit() {
    this.onGetEmployement();
  }

  onGetEmployement() {
    let entryId = ContentfulConfig.EmpoweringEmployability_Entry;
    this.contentfulService.getEmployement(entryId)
      .subscribe(
      employementData => this.employementData = employementData.fields,
      error => console.log(error),
      () => console.log('employement data getting sucessfully')

      );

  }

  ngOnDestroy() {
    this.employementSubscription.unsubscribe();
  }
}
