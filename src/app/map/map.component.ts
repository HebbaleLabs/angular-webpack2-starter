import { homePageService } from './../services/homepage.service';
import { Component, OnInit } from '@angular/core';
import { Url } from 'url';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Sanitizer } from '@angular/core/src/security';

@Component({
    selector: 'tf-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    mapUrl: string;
    trustedUrl: SafeResourceUrl;
    constructor(public mapservice: homePageService, private sanitizer: DomSanitizer) {}
    ngOnInit() {
    this.mapservice.getmapresponse().subscribe(
        (response) => {
            this.mapUrl = response.json().fields.mapEmbedUrl;
            this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapUrl);
        }
    );
    }
}
