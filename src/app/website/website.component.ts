import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'tf-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteComponent implements OnInit {
  navBarType = 'Home Page Nav Bar';
  constructor() { }
  ngOnInit() {

  }

}
