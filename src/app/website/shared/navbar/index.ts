import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { NavbarComponent } from './navbar.component';

import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        NavbarComponent,
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [],
    exports: [
        NavbarComponent,
    ]
})
export class NavbarModule {

}
