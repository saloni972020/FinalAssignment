import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(private http: HttpClient) { } 

  updateData(id,data){ 
  console.log(id); 
  return this.http.patch("http://localhost:3000/user/"+id,data); 
  
  } 
  }
  
  
