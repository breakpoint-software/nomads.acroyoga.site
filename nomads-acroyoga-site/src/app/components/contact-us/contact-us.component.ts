import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/model/mail';
import { MailerService } from 'src/app/services/mail/mailer.service';
import * as googleCred from '../../../assets/email/credentials.json'

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  message: string;
  gCredentials = googleCred;

  constructor(private mailservice: MailerService) {}

  ngOnInit(): void {
    
    // new calendar_v3.Calendar({ })
    // const oAuth2Client = new google.auth.OAuth2(
    //   this.gCredentials.web.client_id, this.gCredentials.web.client_secret, '');

  }

  sendMail($event){
    console.log('sendMail')
    let mail = new Mail();
    mail.body = this.message;
    mail.mailTo = this.email;

    this.mailservice.sendMail(mail);
  }
  
}
