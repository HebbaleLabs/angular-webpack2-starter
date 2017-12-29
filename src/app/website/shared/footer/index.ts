import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { FooterComponent } from './footer.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        FooterComponent,
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        FooterComponent,
    ]
})
export class FooterModule {

}
