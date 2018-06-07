import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { McBreadcrumbsModule } from 'ngx-breadcrumbs';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { LaunchComponent, LaunchesComponent, CompanyComponent } from './pages';
import { CompanyService, LaunchService } from './services/api';
import { MaterialModule, BreadcrumbComponent } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    // pages
    LaunchesComponent,
    CompanyComponent,
    LaunchComponent,
    BreadcrumbComponent,
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
    LaunchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
