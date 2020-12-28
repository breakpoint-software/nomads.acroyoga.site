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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { OurCoursesComponent } from './components/our-courses/our-courses.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    FormsModule,
    FlexLayoutModule,
    NgbModule,
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
