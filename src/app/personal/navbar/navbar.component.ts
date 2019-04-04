import { ProfileComponent } from './../profile/profile.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { longStackSupport } from 'q';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
nme:string;
  constructor(private router:Router) { }
  

  ngOnInit() {
    
    // this.name=localStorage.getItem('data[2].firstName');
    console.log(localStorage.getItem('data[3].firstName'));
    // this.router.navigate(['/personal/navbar/profile']) 
  
console.log(localStorage.getItem('nm'))
// tslint:disable-next-line: align
this.nme=localStorage.getItem("nm");
 

  
    
  }
  clr(){
    localStorage.clear()
  }
  }
  
  


