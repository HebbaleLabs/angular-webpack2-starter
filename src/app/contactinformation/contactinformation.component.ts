import { OnInit, Component } from '@angular/core';
import { homePageService } from '../services/homepage.service';
@Component({
    selector: 'tf-contactinformation',
    templateUrl: './contactinformation.component.html',
    styleUrls: ['./contactinformation.component.scss']
})
export class ContactInformation implements OnInit {
    entry = [];
    displayMapModel = {};
    contactInformation = [];
    fontDisplayMapModel = {};
    id: number;
    contentArray = [];
    fontContentArray = [];
    constructor(public contactinfoService: homePageService) { }
    ngOnInit() {
        this.contactinfoService.getcontactinforesponse().subscribe(
            (response) => {
                this.id = response.items[0].fields.getInTouch.sys.id;
                response.includes.Entry.forEach(element => {
                    const dataModel = {
                        title: element.fields.title,
                        phone: element.fields.phone,
                        email: element.fields.email
                    };
                    this.displayMapModel[this.id] = dataModel;
                    if (element.sys.id === this.id) {
                        this.displayMapModel[element.sys.id].title = element.fields.title;
                        this.displayMapModel[element.sys.id].phone = element.fields.phone;
                        this.displayMapModel[element.sys.id].email = element.fields.email;
                        this.contentArray.push(dataModel);
                    }
                });
                response.items[0].fields.socialLinks.forEach(elementFont => {
                    const fontDataModel = {
                        fontAwesome: '',
                        iconBgHex: ''
                    };
                    this.fontDisplayMapModel[elementFont.sys.id] = fontDataModel;
                    this.fontContentArray.push(fontDataModel);
                });
                response.includes.Entry.forEach(elementE => {
                    if (this.fontDisplayMapModel[elementE.sys.id]) {
                        console.log(elementE.sys.id);
                        this.fontDisplayMapModel[elementE.sys.id].fontAwesome
                            = elementE.fields.fontAwesomeReference;
                        this.fontDisplayMapModel[elementE.sys.id].iconBgHex
                            = elementE.fields.iconBgHex;
                    }
                });

            }
        );
    }
}
