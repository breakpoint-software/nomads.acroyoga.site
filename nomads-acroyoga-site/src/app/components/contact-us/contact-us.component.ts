import { Component, OnInit } from '@angular/core';
import { MailerService } from 'src/app/services/mailer.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  name: string;
  email: string;
  message: string;

  constructor(private mailservice: MailerService) {}

  ngOnInit(): void {}
}
