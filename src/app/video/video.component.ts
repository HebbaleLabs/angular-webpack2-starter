import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Sanitizer } from '@angular/core/src/security';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { homePageService } from './../services/homepage.service';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
@Component({
    selector: 'tf-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
    videoUrl: string;
    trustedVideoUrl: SafeResourceUrl;
    constructor(public videoservice: homePageService, public sanitizer: DomSanitizer) { }
    ngOnInit () {
        this.videoservice.getvideoresponse().subscribe(
            (response) => {
                response.json().items.forEach(
                    element => {
                        this.videoUrl = element.fields.videoUrl;
                        this.trustedVideoUrl =
                        this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
                    });
            }
        );
    }
}
