import { Injectable } from '@angular/core';
import { google } from 'googleapis';
import * as credentialjson from '../../assets/email/credentials.json'
import { Mail } from '../model/mail';
import { ApiserviceService } from './shared/apiservice.service';

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  credentials = credentialjson;
  constructor(private apiService: ApiserviceService) {

  }

  sendMail(mail: Mail){
    this.apiService.sendPost<Mail>('mail', 'send', mail);    
  }
  
}