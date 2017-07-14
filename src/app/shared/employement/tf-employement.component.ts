import { EmployementModel } from './tf-employement.model';
import { ContentfulService } from './../../services/contentful/tf-contentful.service';
import { Config } from './../../config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-employement',
  templateUrl: 'tf-employement.component.html'
})

export class EmployementComponent implements OnInit {
  employementData: EmployementModel;
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit() {
    this.onGetEmployement();
  }

  onGetEmployement() {
    let entryId = Config.EmpoweringEmployability_Entry;
    this.contentfulService.getEmployement(entryId)
      .subscribe(
      employementData => this.employementData = employementData,
      error => console.log(error),
      () => console.log('employement data getting sucessfully')

      );

  }
}
