import { Component, OnInit } from '@angular/core';
import { homePageService } from '../services/homepage.service';
@Component({
    selector: 'tf-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    displayMapModel = {};
    productOfferings = [];
    productOfferingHeader: String;
    constructor(public productservice: homePageService) { }
    ngOnInit() {
        this.productservice.getProductResponse().subscribe(
            (response) => {
                const assetContent: any[] = response.includes.Asset;
                const entryContent: any[] = response.includes.Entry;
                this.productOfferingHeader = response.items['0'].fields.sectionHeader;
                entryContent.forEach(element => {
                    const dataModel = {
                        image: '',
                        title: element.fields.segmentTitle,
                        description: element.fields.segmentDescription
                    };
                    this.displayMapModel[element.fields.cardImage.sys.id] = dataModel;
                    this.productOfferings.push(dataModel);
                });
               assetContent.forEach(asset => {
                    this.displayMapModel[asset.sys.id].image = asset.fields.file.url;
                });
            }

        );
    }
}
