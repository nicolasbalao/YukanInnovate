import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
  }

  createProject(title: string, reference: string, description: string) {
    this._apiService.createProject(title, reference, description).subscribe(res => {
      console.log("Project create", res);
    })
    this._router.navigate(["/"]);
  }

}
