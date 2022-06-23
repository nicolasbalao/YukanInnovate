import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.scss']
})
export class ModifyProjectComponent implements OnInit {

  @Input() id!: string;
  @Input() projectData: any;

  constructor(private _apiService: ApiService, private _router: Router) { }

  ngOnInit(): void {
  }

  updateProject(title: string, reference: string, description: string) {
    this._apiService.udpateProject(title, reference, description, this.id).subscribe(res => {
      console.log("Object modified", res);
    });
    this._router.navigate(["/"]);

  }

  deleteProject() {
    this._apiService.deleteProjectById(this.id).subscribe(res => {
      console.log("Project deleted", res);

    });
    this._router.navigate(["/"]);

  }

}
