import { Router} from '@angular/router';
import { Validators, FormBuilder,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {HttpGetService} from './../http-get.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 

  angForm: FormGroup; 
  posts: any; 
  
  
  constructor(private fb: FormBuilder,private svc: HttpGetService,private router: Router) { 
  this.createForm(); 
  } 
  
  ngOnInit() {} 
  
  createForm(){ 
  this.angForm = this.fb.group({ 
  username: ['', Validators.required ], 
  password: ['',[Validators.required,Validators.minLength(6)]] 
  }); 
  } 
  
  login(){ 
  if(this.angForm.valid) 
  { 
  // console.log(this.angForm.value); 
  this.svc.getDetails(this.angForm.value).subscribe(response => { 
this.posts = response; 
localStorage.setItem("data",JSON.stringify(this.posts));
  console.log(response); 
  
  console.log(Object.keys(response).length)
  
  if ((Object.keys(response).length) === 0) {
    console.log('Invalid user');
    alert('Not a registered user, Please sign in')
  
    } else {
      
      
      console.log('Valid user');
      localStorage.setItem("nm",(this.posts[0].firstName));
      
      
      this.svc.setLoggedIn(true);
      console.log(this.svc.loggedInStatus);
      this.router.navigate(['/personal/navbar/profile']);
     
  }
  
  
    });
  
    }
    }
  
    }
  
  
  
