import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http: HttpClient) { }

  oniLogin(loginInfo) {
    return this.http.post('http://192.168.1.129/cands/wp-json/custom-plugin/login', loginInfo).pipe(
      map(results => results)
    );
  }

  checkPermission() {
    if (localStorage.getItem('userData')) {
      return true;
    } else {
      return false;
    }
  }

}
