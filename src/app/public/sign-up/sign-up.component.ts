import { RouterModule } from '@angular/router';
import { HttpPostService } from './../http-post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import {HttpGetService} from './../http-get.service';
import { from } from 'rxjs';
import { Router} from '@angular/router';
import {MustMatch} from '../passwordValidator'
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit { 

  form: FormGroup; 
  submitted = false; 
  posts: any; 
  
  constructor(private fb: FormBuilder,private service: HttpPostService, private getService: HttpGetService, private router:Router) { } 
  
  ngOnInit() { 
  
  this.form = this.fb.group({ 
  
  firstName: ['', Validators.required], 
  
  lastName: ['', Validators.required], 
  
  username: ['', [Validators.required, Validators.email]], 
  
  phoneNo: ['', Validators.required], 
  
  address: ['', Validators.required], 
  
  brief : [''], 
  
  password: ['', [Validators.required, Validators.minLength(6)]], 
  
  confirmPswd: ['', Validators.required] 
}, { 
validator: MustMatch('password', 'confirmPswd') 
}); 
} 
  
  get f() { return this.form.controls; } 
  
  register(){ 
  this.submitted = true; 
  
  if(this.form.valid) 
  { 
  console.log(this.form.value); 
  
  
  this.service.enroll(this.form.value).subscribe(); 
 alert("Registered Sucessfully")
 this.router.navigate(['/login']); 
  } 
  else 
  alert("please complete the form"); 
  
  // stop here if form is invalid 
  if (this.form.invalid) { 
  return; 
  } 
  
  
  
  } 
  
  }
