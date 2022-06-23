import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})



export class LoginPageComponent {



  constructor(private _authService: AuthService, private _router: Router) { }

  tokenJWT: object = {};

  onSubmit(username: string) {
    this._authService.login(username).subscribe(res => {
      console.log(res);
    })
    this._router.navigate(['/']);
  }

}
