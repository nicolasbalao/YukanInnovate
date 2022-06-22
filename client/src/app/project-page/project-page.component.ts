import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  Object = Object;


  constructor(private _httpClient: HttpClient) { }

  projectData: Object = {};


  ngOnInit(): void {
    this._httpClient.get("http://localhost:3000/api/project").subscribe(res => {
      this.projectData = res;
      console.log(this.projectData)
    });
  }

}
