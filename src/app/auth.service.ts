import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  WEBSERVICE_URL = 'https://cluboto.net/webservice/service_post.php';

  constructor(
    private httpClient: HttpClient
  ) { }

  accountRegister(email: string, password: string) {
    let url = this.WEBSERVICE_URL;;
    let body = new HttpParams({
      fromObject: {
        act: 'register',
        email: email,
        password: password
      }
    })
    return this.httpClient.post(url, body).toPromise()
  }

  accountLogin(email: string, pw: string) {
    let url = this.WEBSERVICE_URL;;
    let body = new HttpParams({
      fromObject: {
        act: 'login',
        email: email,
        password: pw
      }
    })
    return this.httpClient.post(url, body).toPromise();
  }
}
