import { Config } from './../../config';
import { AddressModel } from './tf-address.model';
import { ContentfulService } from './../../services/contentful/tf-contentful.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-address',
  templateUrl: 'tf-address.component.html'
})

export class AddressComponent implements OnInit {
  addressData: AddressModel;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.onGetAddress();
  }

  onGetAddress() {
    let entryId = Config.Address_ENTRY;
    this.contentfulService.getAddress(entryId)
      .subscribe(
      addressData => this.addressData = addressData,
      error => console.log(error),
      () => console.log('getting the adress Data Sucessfully')
      );
  }

}
