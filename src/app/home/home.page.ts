import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // this.checkAuthentication();
  }

  // checkAuthentication() {
  //   if (!localStorage.getItem('userData')) {
  //     this.router.navigate(['signup']);
  //   }
  // }


}
