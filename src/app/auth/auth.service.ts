import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'token';
  httpClient = inject(HttpClient);
  baseUrl = 'http://localhost:9090/auth';

  signup(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
      }),
    };
    return this.httpClient.post(`${this.baseUrl}/register`, data,httpOptions);
  }

  login(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
      }),
    };
    return this.httpClient.post(`${this.baseUrl}/authenticate`, data , httpOptions)
      .pipe(tap((result) => {
        localStorage.setItem(this.tokenKey, JSON.stringify(result));
      }));
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  isLoggedIn() {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  public getToken(): string | null {
    return this.isLoggedIn() ? localStorage.getItem(this.tokenKey) : null;
  }

}