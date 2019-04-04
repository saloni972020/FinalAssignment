import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpPostService {
_url = 'http://localhost:3000/user';

  constructor(public _http:HttpClient) { }

enroll(user){
 console.log("jj");
  return this._http.post(this._url,user);
}
}
