import { Injectable } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Mail } from '../../model/mail';
import { ApiserviceService } from '../shared/apiservice.service';

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  constructor(private apiService: ApiserviceService) {}

  sendMail(mail: Mail): Observable<any> {
    return this.apiService.sendPost<Mail>('mail', 'send', mail);
  }
}
