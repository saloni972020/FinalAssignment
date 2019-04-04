import { UpdateService } from './../../update.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit { 

Form: FormGroup; 


constructor(private fb: FormBuilder,private updateService: UpdateService) { } 

ngOnInit() { 

this.Form = this.fb.group({ 
// firstName:[JSON.parse(localStorage.getItem('data'))[0].firstName], 
// lastName: [JSON.parse(localStorage.getItem('data'))[0].lastName], 
 firstName:[JSON.parse(localStorage.getItem('data'))[0].firstName],
// fullName:[JSON.parse(localStorage.getItem('data'))[0].firstName+" "+JSON.parse(localStorage.getItem('data'))[0].lastName,Validators.required], 
username: [JSON.parse(localStorage.getItem('data'))[0].username,Validators.required], 
phoneNo: [JSON.parse(localStorage.getItem('data'))[0].phoneNo,Validators.required], 
address: [JSON.parse(localStorage.getItem('data'))[0].address,Validators.required], 
brief: [JSON.parse(localStorage.getItem('data'))[0].brief], 
password: [JSON.parse(localStorage.getItem('data'))[0].password] 

}); 

console.log(JSON.parse(localStorage.getItem('data'))[0].username);

} 

data={ 
firstName: "asd", 
lastName: "ef", 
username: "un", 
phoneNo: 12, 
address: "adass", 
brief: "asdqwe", 
password: "yquweikm" 
} 

update(){ 
 if(this.Form.valid) 
 { 
// let str=this.Form.get("fullName").value; 
//  var str2=str.split(" "); 
//  this.data.firstName=str2[0]; 
//  this.data.lastName=str2[1]; 
//  console.log(str2[0]); 
//  this.data.username=this.Form.get('username').value; 
//  this.data.phoneNo=this.Form.get('phoneNo').value; 
// this.data.brief=this.Form.get('brief').value; 
//  this.data.password=this.Form.get('password').value; 

this.updateService.updateData(JSON.parse(localStorage.getItem('data'))[0].id,this.Form.value).subscribe(response => { 
console.log("Put request successful"); 
console.log(response); 

}); 
} 
//} 

}
 }

