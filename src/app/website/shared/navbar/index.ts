import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule {

}
