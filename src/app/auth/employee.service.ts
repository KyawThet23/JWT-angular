import { inject, Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private token = inject(AuthService);
  private http = inject(HttpClient);
  baseUrl = 'http://localhost:9090/employee';

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
      "Authorization": `Bearer ${this.token.getToken()}`,
    }),
  };

  addNew(data : any){
    console.log(`Token : ${this.token.getToken()}`)
    this.http.post(`${this.baseUrl}`,data,this.httpOptions);
  }

  getAll(){
    this.http.get(`${this.baseUrl}`).pipe(tap((result) => {
      console.log(result)
    }))
  }
}
