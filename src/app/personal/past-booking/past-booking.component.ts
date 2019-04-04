import { PastGetService } from './../past-get.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetBookingService } from '../get-booking.service';

@Component({
  selector: 'app-past-booking',
  templateUrl: './past-booking.component.html',
  styleUrls: ['./past-booking.component.css']
})
export class PastBookingComponent implements OnInit {
booking:any
  constructor(private svc:PastGetService) { }

  ngOnInit() {
    this.svc.getBooking().subscribe(response => { 
      this.booking = response; 
    
        console.log(this.booking)

})
}
}
