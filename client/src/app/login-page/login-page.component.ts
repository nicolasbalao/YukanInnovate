import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})



export class LoginPageComponent {



  constructor(private __httpClient: HttpClient) { }

  tokenJWT: object = {};

  login(username: string): void {
    this.__httpClient.post("http://localhost:3000/api/login", { "username": username }).subscribe(res => this.tokenJWT = res);
  }


}
