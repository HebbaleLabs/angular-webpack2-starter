import { PopularCourseCardDisplayModel } from './../course-home-page.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tf-popular-courses',
  templateUrl: './popular-courses.component.html',
  styleUrls: ['./popular-courses.component.scss']
})
export class PopularCoursesComponent {
  @Input() displayModel: PopularCourseCardDisplayModel;
}
