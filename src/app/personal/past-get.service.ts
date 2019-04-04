import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PastGetService {

  turl = 'http://localhost:3000/past';

  constructor(private http:HttpClient) { }
  getBooking(){
    console.log()
    return this.http.get(this.turl)

  }
}