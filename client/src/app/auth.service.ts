import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})

export class AuthService {
    private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
    isLoggedIn$ = this._isLoggedIn$.asObservable();

    constructor(private _httpClient: HttpClient) {
        const token = localStorage.getItem('auth');
        this._isLoggedIn$.next(!!token);
    }

    //Send request for login and stock in localStorage the auth token
    login(username: string) {
        return this._httpClient.post("http://localhost:3000/api/login", { "username": username }).pipe(
            tap((res: any) => {
                this._isLoggedIn$.next(true);
                localStorage.setItem('auth', res);
            })
        )
    }
}
