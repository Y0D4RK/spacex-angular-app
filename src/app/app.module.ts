import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';
import {CountDown} from 'ng2-date-countdown';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { HomeComponent, LaunchComponent, LaunchesComponent,
  CompanyComponent, RocketComponent, RocketsComponent } from './pages';
import { CompanyService, LaunchService, RocketService } from './services/api';
import { MaterialModule, BreadcrumbComponent, TreeComponent } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    CountDown,
    // pages
    LaunchesComponent,
    CompanyComponent,
    LaunchComponent,
    HomeComponent,
    RocketComponent,
    RocketsComponent,
    // shared
    BreadcrumbComponent,
    TreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting,
    McBreadcrumbsModule.forRoot()
  ],
  providers: [
    CompanyService,
    LaunchService,
    RocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
