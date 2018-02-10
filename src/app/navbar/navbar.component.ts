import { Component } from '@angular/core';
import { homePageService } from '../services/homepage.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Url } from 'url';
@Component({
    selector: 'tf-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    contentTypeResponse: any;
    menutabs = [];
    talfinderLogoUrl: Url;
    displayMapModel: {};
    test: String;
    constructor(public entriesAssestService: homePageService) {}
    ngOnInit() {
        this.entriesAssestService.getResponseContent().subscribe(
            (response) => {
                this.contentTypeResponse = response.json();
                this.menutabs = this.contentTypeResponse.items[0].fields.menuTabs;
                this.talfinderLogoUrl = this.contentTypeResponse.includes.Asset[0].fields.file.url;
            }
        );
    }
}
