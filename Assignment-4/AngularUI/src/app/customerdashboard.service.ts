import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Userdata } from './userdata';

@Injectable({
  providedIn: 'root'
})
export class CustomerdashboardService {
private url='http://localhost:53226/api/Customer/';
  constructor(private http:HttpClient) { }
  getdata():Observable<Userdata[]>
  {
    return this.http.get<Userdata[]>(this.url+'Getdetails');
  }
}
