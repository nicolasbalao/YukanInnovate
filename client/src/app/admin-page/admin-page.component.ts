import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private _apiService: ApiService) { }

  message!: any;

  ngOnInit(): void {
    this._apiService.adminPage().subscribe(res => {
      console.log("res", res)
      this.message = res
    });

    console.log("Jwt token is very secure if you use a strong KEY")
    console.log("Hint: JaWT Scratchpad")
  }

}
