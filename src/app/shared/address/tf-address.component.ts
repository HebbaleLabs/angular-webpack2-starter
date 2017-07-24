import { Subject } from 'rxjs/Subject';
import { ContentfulConfig } from './../../contentful/tf-contentful.config';
import { ContentfulService } from './../../contentful/tf-contentful.service';

import { AddressModel } from './tf-address.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tf-address',
  templateUrl: 'tf-address.component.html',
  styleUrls: ['./tf-address.component.scss']
})

export class AddressComponent implements OnInit, OnDestroy {
  addressData: AddressModel;
  private addressSubscription: Subscription;
  private ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.onGetAddress();
  }

  onGetAddress() {
    let entryId = ContentfulConfig.Address_ENTRY;
    this.contentfulService.getAddress(entryId)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(
      addressData => this.addressData = addressData.fields,
      error => console.log(error),
      () => console.log('getting the adress Data Sucessfully')
      );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}
