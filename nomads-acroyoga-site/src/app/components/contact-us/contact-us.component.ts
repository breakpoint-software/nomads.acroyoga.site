import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  loading: boolean;

  constructor(
    private mailservice: MailerService,
    private actRoute: ActivatedRoute
  ) {
    this.subject = actRoute.snapshot.params.subject;
    this.loading = false;
  }

  ngOnInit(): void {}

  sendMail($event) {
    this.loading = true;

    let mail = new Mail();
    mail.name = this.name;
    mail.body = this.message;
    mail.mailTo = 'acroyoga.nomads@gmail.com';
    mail.replyTo = this.email;
    mail.subject = this.subject;
    this.mailservice.sendMail(mail).subscribe((e) => {
      this.name = '';
      this.message = '';
      this.email = '';
      this.subject = '';
      this.loading = false;
    });
  }
}
