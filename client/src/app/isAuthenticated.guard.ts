import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, tap } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable({
    providedIn: 'root',
})

export class IsAuthenticateGuard implements CanActivate {

    constructor(private _authService: AuthService, private _router: Router) { }

    //Check if the current user have is logged redirect if doesn't
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this._authService.isLoggedIn$.pipe(tap(isLoggedIn => {
            if (!isLoggedIn) {
                this._router.navigate(['/login']);
            }
        })
        )
    }
}