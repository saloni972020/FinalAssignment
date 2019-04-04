import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetBookingService {

  turl = 'http://localhost:3000/pending';

  constructor(private http:HttpClient) { }
  getBooking(){
    console.log()
    return this.http.get(this.turl)

  }
}
