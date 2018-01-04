import { ManyPossibilitiesModel } from './company-home.model';
import { Injectable } from '@angular/core';
@Injectable()
export class CompanyHomeService {
  getPossibilities(data: any): ManyPossibilitiesModel {
    const possibiliteis: any[] = [];
    const sectionTitle: string = data.items['0'].fields.sectionHeader;
    data.includes.Entry.forEach(entry => {
      const dataModel = {
        possibilitiesTeaser: entry.fields.possibilityTeaser,
        cssClassIcon: entry.fields.cssClassIcon
      };
      possibiliteis.push(dataModel);
    });
    return { sectionTitle, possibiliteis };
  }
}
