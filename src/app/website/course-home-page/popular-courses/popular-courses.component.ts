import { PopularCourseCardDisplayModel } from './../course-home-page.model';
import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ContentfulService } from '../../shared/contentful/contentful.service';

@Component({
  selector: 'tf-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent implements OnInit {
  @Input() displayModel: PopularCourseCardDisplayModel;
  ngOnInit() {
  }
}
