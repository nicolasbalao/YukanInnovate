import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { }

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details-page.component.html',
  styleUrls: ['./project-details-page.component.scss']
})
export class ProjectDetailsPageComponent implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  saveOnDB(title: string, reference: string, description: string) {
    const body: object = {
      "title": title,
      "reference": reference,
      "description": description,
    }

    this._httpClient.post("http://localhost:3000/api/project", body).subscribe(res => console.log(res))
  }


}
