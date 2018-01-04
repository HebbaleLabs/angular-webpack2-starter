import { Injectable } from '@angular/core';
import { PopularCourseCardDisplayModel } from './course-home-page.model';
@Injectable()
export class CourseHomePageService {


  getPopularCourse(data): PopularCourseCardDisplayModel {
    const sectionTitle: string = data.items[0].fields.title;
    const popularCourseCard: any[] = [];
    const displayModelMap = {};
    data.includes.Entry.forEach(entry => {
      const dataModel = {
        image: '',
        courseTitle: entry.fields.courseTitle,
        courseDescription: entry.fields.courseSummary
      };
      displayModelMap[entry.fields.courseThumbnail.sys.id] = dataModel;
      popularCourseCard.push(dataModel);
    });
    data.includes.Asset.forEach(asset => {
      displayModelMap[asset.sys.id].image = asset.fields.file.url;
    });
    return { sectionTitle, popularCourseCard };
  }
}
