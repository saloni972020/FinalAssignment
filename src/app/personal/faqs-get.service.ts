import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaqsGetService {

  turl = 'http://localhost:3000/faqs';

  constructor(private http:HttpClient) { }
  getFaqs(){
    console.log()
    return this.http.get(this.turl)

  }
}

