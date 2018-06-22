import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {CommonMaterialModule} from './common-material.module';

import {HeaderComponent} from './components/header/header.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {SidenavComponent} from './components/sidenav/sidenav.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonMaterialModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonMaterialModule,
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
  ],
  declarations: [
    HeaderComponent,
    DashboardComponent,
    SidenavComponent,
  ]
})
export class SharedModule { }
