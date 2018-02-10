import { Component, OnInit } from '@angular/core';
import { homePageService } from '../services/homepage.service';
@Component({
    selector: 'tf-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    demo: String;
    demoDescription: String;
    demoEmail: String;
    support: String;
    supportDescription: String;
    supportEmail: String;
    constructor(public contactresponse: homePageService) {}
    ngOnInit () {
        this.contactresponse.getcontactresponse().subscribe(
            (response) => {
                this.demo = response.json().items[0].fields.contactType;
                this.demoDescription = response.json().items[0].fields.contactDescription;
                this.demoEmail = response.json().items[0].fields.contactEmail;

                this.support = response.json().items[1].fields.contactType;
                this.supportDescription = response.json().items[1].fields.contactDescription;
                this.supportEmail = response.json().items[1].fields.contactEmail;
            }
        );
    }
}
