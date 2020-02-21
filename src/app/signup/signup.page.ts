import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  providers: [AuthenticationService]
})

export class SignupPage implements OnInit {
  errMessage: string = "";
  isLogin: boolean = true;
  isFailed: boolean = false;
  userCredentials = {
    username: "",
    password: ""
  }

  constructor(private loginService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.userCredentials = {
      username: "",
      password: ""
    }
    this.errMessage = "";
  }

  togglePage() {
    this.isLogin = !this.isLogin;
  }

  login(loginData) {
    if (!loginData || !loginData.username || !loginData.password) {
      this.isFailed = true;
      this.errMessage = "FILL ALL THE DETAILS";
      return
    } else {
      const formData = new FormData();
      formData.append('username', loginData.username);
      formData.append('password', loginData.password);
      this.loginService.oniLogin(formData).subscribe(res => {
        if (res && res['data']) {
          this.router.navigate(['home']);
          console.log(res, "res");
        } else {
          this.isFailed = true;
          this.errMessage = "INTERNAL ERROR OCCURRED";
        }


      }, err => {
        this.isFailed = true;
        this.errMessage = "INVALID CREDENTIALS";
      })
    }

  }

}
