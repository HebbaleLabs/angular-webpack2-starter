import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';



@Component({
  selector: 'tf-course-home-page',
  templateUrl: './course-home-page.component.html',
  styleUrls: ['./course-home-page.component.css']
})
export class CourseHomePageComponent implements OnInit {
  navBarType = 'For Learners';
  page = 'Home';
  ourJobPartner = 'Courses Home';
  testimonialType = 'Course Home';
  constructor(private http: Http) {

  }
  ngOnInit() {
  }

}



