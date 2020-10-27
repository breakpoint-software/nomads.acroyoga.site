import { Injectable } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import * as credentialjson from '../../../assets/email/credentials.json';
import { Mail } from '../../model/mail';
import { ApiserviceService } from '../shared/apiservice.service';

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  credentials = credentialjson;
  constructor(
    private apiService: ApiserviceService,
    private gApi: GoogleApiService
  ) {}

  sendMail(mail: Mail) {
    this.apiService
      .sendPost<Mail>('mail', 'send', mail)
      .subscribe((e) => console.log(e));
  }
}
