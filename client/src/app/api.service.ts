import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})

export class ApiService {

    constructor(private _httpClient: HttpClient) { }

    createProject(title: string, reference: string, description: string) {
        const body = {
            "title": title,
            "reference": reference,
            "description": description
        };

        return this._httpClient.post("http://localhost:3000/api/project", body);
    }

    projectById(id: string) {
        return this._httpClient.get(`http://localhost:3000/api/project/${id}`)
    }

    udpateProject(title: string, reference: string, description: string, id: string) {
        const body = {
            "title": title,
            "reference": reference,
            "description": description
        };

        console.log(body);
        return this._httpClient.put(`http://localhost:3000/api/project/${id}`, body);
    }

}
