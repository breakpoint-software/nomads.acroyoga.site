import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import * as data from '../assets/email/credentials.json';
import { HttpClientModule } from '@angular/common/http';
import { GoogleApiModule } from 'ng-gapi';
import { GapiModule } from './gapi.module';
import { FormsModule } from '@angular/forms';
import { OurCoursesComponent } from './components/our-courses/our-courses.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutUsComponent,
    ContactUsComponent,
    OurCoursesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    GapiModule,
    FormsModule,
  ],
  providers: [
    // {
    //   provide: google.authentication.OAuth2Client,
    //   useValue: new google.authentication.OAuth2Client(
    // // You get this in GCP project credentials
    //     data.web.client_id,
    //     data.web.client_secret,
    // // URL where you'll handle succesful authentication
    // ''
    //     )
    // },
    // {
    //   provide: calendar_v3.Calendar,
    //   useFactory: (auth: OAuth2Client) => {
    //     return new calendar_v3.Calendar({ auth });
    //   } ,
    //   deps: [google.authentication.OAuth2Client],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
