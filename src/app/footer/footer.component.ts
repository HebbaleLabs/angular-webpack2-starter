import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { homePageService } from '../services/homepage.service';
import { json } from 'body-parser';
@Component({
    selector: 'tf-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    displayMap = [];
    categoryEntriesarray = [];
    copyRight: String;
    constructor(public footerService: homePageService) { }
    ngOnInit() {
        this.footerService.getfooterresponse().subscribe(
            (response) => {
                this.copyRight = response.items[0].fields.Copyright;
                response.includes.Entry.forEach(element => {
                    const dataModel = {
                        sitemapCategory: element.fields.sitemapCategory,
                        sitemapEntries: element.fields.sitemapEntries,
                        orderOfAppearance: element.fields.orderOfAppearance
                    };
                    this.displayMap[element.fields.orderOfAppearance] = dataModel;
                });
                this.displayMap.forEach(ele => {
                    this.categoryEntriesarray.push(
                        {
                            sitemapCategory: ele.sitemapCategory,
                            sitemapEntries: ele.sitemapEntries
                        });
                });
            }
        );
    }
}
