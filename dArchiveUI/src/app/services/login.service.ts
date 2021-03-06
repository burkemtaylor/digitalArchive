import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    credentials = {username : '', password : ''};

    loggedInAs = null;

    editedExhibit = undefined;
    backendUrl = 'http://localhost:8080/users/login';
    headers = new HttpHeaders({'Content-Type':'application/json'});
    options = {headers: this.headers};

    constructor(
        private http : HttpClient,
        private router : Router
    ){}

    login(username : string, password : string) { 
        return this.http.post(this.backendUrl + `/${username}/${password}`, this.options).pipe();
    }

    logout() {
        this.loggedInAs = null;
        this.router.navigate(['login/']); 
    }
}