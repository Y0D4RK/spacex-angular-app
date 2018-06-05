import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { MissionsComponent, CompanyComponent } from './pages';
import { CompanyService, LaunchService } from './services/api';
import { MaterialModule, LaunchComponent } from './shared';


@NgModule({
  declarations: [
    AppComponent,
    // pages
    MissionsComponent,
    CompanyComponent,
    LaunchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRouting
  ],
  providers: [
    CompanyService,
    LaunchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
