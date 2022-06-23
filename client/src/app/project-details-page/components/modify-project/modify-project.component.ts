import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.scss']
})
export class ModifyProjectComponent implements OnInit {

  @Input() id!: string;
  @Input() projectData: any;

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    console.log(this.projectData)
  }

  updateProject(title: string, reference: string, description: string) {
    this._apiService.udpateProject(title, reference, description, this.id);
  }

}
