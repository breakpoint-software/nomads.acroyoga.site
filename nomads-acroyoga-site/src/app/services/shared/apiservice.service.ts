import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as SiteSettings  from '../../../assets/settings/sitesettings.json';
import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  settings: SiteSetting;
  constructor(private httpClient: HttpClient) { 
    this.settings = JSON.parse(JSON.stringify(SiteSettings)) as SiteSetting
  }
  
  BuildApiEndPoint(apiName: string, endPointName: string){
    let api = this.settings.ApiSettings.filter(e => e.ApiName == apiName);
    if (api.length == 0)
      throw new Error("Api does not exist");
    let endPoint = api[0].EndPointNames.filter(e => e.Name == endPointName);
    if (endPoint.length == 0)
      throw new Error("endpoint  does not exist");
    
    return api[0].ApiRoot + endPoint[0].EndPoint;
  }

  sendPost<T>(apiName: string, endPoint: string, body: T){
    return this.httpClient.post<T>(this.BuildApiEndPoint(apiName, endPoint), body)
    .pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}

  export interface EndPointName {
      Name: string;
      EndPoint: string;
      RequireAuthorization: boolean;
      UseCustomerProfile: boolean;
  }

  export interface ApiSetting {
      ApiName: string;
      ApiRoot: string;
      EndPointNames: EndPointName[];
  }

  export interface SiteSetting {
      ApiSettings: ApiSetting[];
  }

