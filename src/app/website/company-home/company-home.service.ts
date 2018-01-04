import { ManyPossibilitiesModel, FeatureSummaryDataModel } from './company-home.model';
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
  getFeatureSummary(data: any): FeatureSummaryDataModel {
    const advantagedataModelMap = {};
    const imageModelMap = {};
    const featuresSummarySections: any[] = [];

    data.items.forEach(item => {
      const displaydataModel = {
        sectionTitle: item.fields.sectionHeader,
        sectionDescription: item.fields.sectionDescription,
        advantages: [],
        image: {}
      };
      console.log(displaydataModel);
      featuresSummarySections.push(displaydataModel);

      imageModelMap[item.fields.teaserImage.sys.id] = displaydataModel;
      item.fields.advantages.forEach(advantage => {
        advantagedataModelMap[advantage.sys.id] = displaydataModel;
      });
    });
    data.includes.Entry.forEach(entry => {
      const displaydataModel = advantagedataModelMap[entry.sys.id];
      const advantageData = {
        title: entry.fields.advantage,
        icon: entry.fields.cssFaIcon
      };
      displaydataModel.advantages.push(advantageData);
    });
    data.includes.Asset.forEach(asset => {
      imageModelMap[asset.sys.id].image = asset.fields.file.url;
    });
    return { featuresSummarySections };
  }
}
