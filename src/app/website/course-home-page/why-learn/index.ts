import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { WhyLearnComponent } from './why-learn.component';


@NgModule({
    declarations: [
        WhyLearnComponent,
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        WhyLearnComponent,
    ]
})
export class WhyLearnModule {

}
