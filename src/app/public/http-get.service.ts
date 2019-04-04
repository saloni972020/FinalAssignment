import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpGetService {
  geturl = 'http://localhost:3000/user';
  loggedInStatus = false;
   constructor(private httpget:HttpClient) { }
   setLoggedIn(value:boolean){
     this.loggedInStatus=value
     console.log("now at service")
     console.log(this.loggedInStatus)
     
   }
   get isLoggedIn(){
     return this.loggedInStatus
   }
   getDetails(details){
     console.log(details)
     return this.httpget.get(this.geturl,{params:details});
 
   }
   
 }
 
