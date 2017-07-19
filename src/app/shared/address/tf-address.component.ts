import { ContentfulConfig } from './../../contentful/tf-contentful.config';
import { ContentfulService } from './../../contentful/tf-contentful.service';

import { AddressModel } from './tf-address.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tf-address',
  templateUrl: 'tf-address.component.html'
})

export class AddressComponent implements OnInit, OnDestroy {
  addressData: AddressModel;
  private addressSubscription: Subscription;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.onGetAddress();
  }

  onGetAddress() {
    let entryId = ContentfulConfig.Address_ENTRY;
    this.addressSubscription = this.contentfulService.getAddress(entryId)
      .subscribe(
      addressData => this.addressData = addressData.fields,
      error => console.log(error),
      () => console.log('getting the adress Data Sucessfully')
      );
  }

  ngOnDestroy() {
    this.addressSubscription.unsubscribe();
  }

}
