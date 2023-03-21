import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:3000/login';
// const baseUrl2='http://localhost:3000/login';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http:HttpClient) {}
  login(data:any) {
    return this.http.post(baseUrl, data);
  }
  // signup(data:any) {
  //   return this.http.post(baseUrl2, data);
  // }
 
}

