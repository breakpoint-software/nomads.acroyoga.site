import { Injectable } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { GoogleApiService, GoogleAuthService } from 'ng-gapi';
import * as credentialjson from '../../../assets/email/credentials.json'
import { Mail } from '../../model/mail';
import { ApiserviceService } from '../shared/apiservice.service';
// import  {Email } from "../../../assets/js/smtp.js";
declare let Email: any;

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  credentials = credentialjson;
  constructor(private apiService: ApiserviceService, private gApi: GoogleApiService) {
    
    
}


  sendMail(mail: Mail){
    debugger
    Email.send({
      Host : 'smtp.gmail.com',
      Port: 587,
      Username : 'breakpoint.software@gmail.com',
      Password : 'amgrvs87',
      To : 'acroyoga.nomads@gmail.com',
      From : 'breakpoint.software@gmail.com',
      Subject : 'subject test',
      Body : '  <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b><br><br> <b>~End of Message.~</b>'
      }).then( message => { alert(message); } );
     
    // this.apiService.sendPost<Mail>('mail', 'send', mail);    
  }
  
}
  
