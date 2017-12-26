import { Component, OnInit, Input } from '@angular/core';

import { Http, Response } from '@angular/http';
import { UpperCasePipe } from '@angular/common';
import { ContentfulService } from '../contentful/contentful.service';


@Component({
  selector: 'tf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  contentData = { logo: {}, menuitems: {} };
  @Input() navBarName: string;
  some: string = 'some';
  constructor(private http: Http,
    private contentfulService: ContentfulService) { }


  ngOnInit() {

    this.getNavbar(this.navBarName);
  }

  getNavbar(name) {
    this.contentfulService.getNavbarData()
      .subscribe(
      (data: any) => {
        this.contentData.logo = data.includes.Asset[0];
        console.log();
        this.contentData.menuitems = data.items.find(getValues);
        function getValues(item) {

          if (item.fields.navBarType === name) {
            return item;
          }
        }


      },
      (error) => {


      }
      );
  }
}
