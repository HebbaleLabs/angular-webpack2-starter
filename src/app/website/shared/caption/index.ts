import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { CaptionComponent } from './caption.component';

@NgModule({
    declarations: [
        CaptionComponent,

    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        CaptionComponent,
    ]
})
export class CaptionModule {

}
