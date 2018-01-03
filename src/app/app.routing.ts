/* tslint:disable: max-line-length */
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NotFound404Component } from './not-found404.component';
import { Component } from '@angular/core/src/metadata/directives';
import { WebsiteComponent } from './website/website.component';

export const routes: Routes = [
  { path: '', loadChildren: './website/index#WebsiteModule' },
  { path: '**', component: NotFound404Component }
];
