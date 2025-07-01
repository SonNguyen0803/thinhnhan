import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Constants } from '../../../helpers/constants';
import { UriApi } from '../../../helpers/UriApi';
import { environment } from '../../../environments/environment';
declare const window: any;

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient, private router: Router) { }


    getApiKey(): string {
        let ApiKey = environment.API_KEY;
        // if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
        //     ApiKey = environment.API_KEY;
        // } else {
        //     ApiKey = window.__env?.API_KEY || environment.API_KEY;
        // }
        return ApiKey;
    }

    currentUser() {
        var u = localStorage.getItem(Constants.CurrentUser);
        if (u === '' || u === null) {
            return null;
        }
        else
            return JSON.parse(u);
    }

    getToken() {
        var u = this.currentUser();
        return u !== null ? u.accessToken : "";
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem(Constants.CurrentUser);
        localStorage.removeItem(Constants.CurrentMenu);
        this.router.navigateByUrl('/login');
    }

    checkToken() {
        var options = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST',
                'x-api-key': this.getApiKey()
            },
            method: 'POST',
            mode: 'no-cors'
        };
        const token = {
            Authorization: this.getToken()
        }
        return this.http.post<any>(UriApi.api_validToken, token, options);
    }
}