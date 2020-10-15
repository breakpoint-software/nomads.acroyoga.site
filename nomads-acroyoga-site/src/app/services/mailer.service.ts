import { Injectable } from '@angular/core';
import { google } from 'googleapis';
import * as credentialjson from '../../assets/email/credentials.json'

@Injectable({
  providedIn: 'root',
})
export class MailerService {
  credentials = credentialjson;
  constructor() {



// console.log(this.credentials);
    // const {client_secret, client_id, redirect_uris} = this.credentials.web.installed;
    // const oAuth2Client = new google.auth.OAuth2(this.credentials.web.client_id, this.credentials.web.client_secret);
  
    // Check if we have previously stored a token.
    // fs.readFile(TOKEN_PATH, (err, token) => {
    //   if (err) return getNewToken(oAuth2Client, callback);
    //   oAuth2Client.setCredentials(JSON.parse(token));
    //   callback(oAuth2Client);
    // });
  }
  // function getNewToken(oAuth2Client, callback) {
  //   const authUrl = oAuth2Client.generateAuthUrl({
  //     access_type: 'offline',
  //     scope: SCOPES,
  //   });
  //   console.log('Authorize this app by visiting this url:', authUrl);
  //   const rl = readline.createInterface({
  //     input: process.stdin,
  //     output: process.stdout,
  //   });
  //   rl.question('Enter the code from that page here: ', (code) => {
  //     rl.close();
  //     oAuth2Client.getToken(code, (err, token) => {
  //       if (err) return console.error('Error retrieving access token', err);
  //       oAuth2Client.setCredentials(token);
  //       // Store the token to disk for later program executions
  //       fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
  //         if (err) return console.error(err);
  //         console.log('Token stored to', TOKEN_PATH);
  //       });
  //       callback(oAuth2Client);
  //     });
  //   });
  // }
}

