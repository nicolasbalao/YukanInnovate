import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  // Object for using Object.values() in *ngFor
  Object = Object;


  constructor(private _httpClient: HttpClient, private _apiService: ApiService) { }

  projectData: Object = {};


  ngOnInit(): void {
    this.getAllProject()
  }

  deleteProject(id: string) {
    this._apiService.deleteProjectById(id).subscribe(res => {
      console.log("Project deleted", res)
      this.ngOnInit();
    });
  }

  getAllProject() {
    this._apiService.getAllProject().subscribe(res => {
      this.projectData = res;
    })
  }

}
