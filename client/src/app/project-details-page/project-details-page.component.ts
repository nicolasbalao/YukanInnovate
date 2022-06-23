import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})




export class ProjectDetailsPageComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private _route: ActivatedRoute, private _apiService: ApiService) { }


  id!: string;
  projectData: any;

  ngOnInit(): void {
    this.id = this._route.snapshot.params['projectId'];
    console.log("id", this.id);

    if (this.id !== "create") {
      this._apiService.projectById(this.id).subscribe(res => this.projectData = res);
    }

  }


}
