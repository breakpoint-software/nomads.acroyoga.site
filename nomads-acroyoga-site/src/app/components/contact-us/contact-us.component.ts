import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mail } from 'src/app/model/mail';
import { MailerService } from 'src/app/services/mail/mailer.service';
import * as googleCred from '../../../assets/email/credentials.json';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  name = '';
  email = '';
  message: string = '';
  subject: string;
  gCredentials = googleCred;

  constructor(
    private mailservice: MailerService,
    private actRoute: ActivatedRoute
  ) {
    this.subject = actRoute.snapshot.params.subject;
  }

  ngOnInit(): void {
    // new calendar_v3.Calendar({ })
    // const oAuth2Client = new google.auth.OAuth2(
    //   this.gCredentials.web.client_id, this.gCredentials.web.client_secret, '');
  }

  sendMail($event) {
    let mail = new Mail();
    mail.name = this.name;
    mail.body = this.message;
    mail.mailTo = 'acroyoga.nomads@gmail.com';
    mail.replayTo = this.email;
    mail.subject = this.subject;
    console.log(mail);
    this.mailservice.sendMail(mail);
  }
}
