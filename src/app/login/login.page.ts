import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  router: Router;
  constructor(router: Router) { 
    this.router = router;
  }

  register(){
    this.router.navigate(['/home', '']);
  }

  ngOnInit() {
  }

}
