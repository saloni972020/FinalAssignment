import { Component, OnInit } from '@angular/core';
import { GetBookingService } from '../get-booking.service';

@Component({
  selector: 'app-pending-booking',
  templateUrl: './pending-booking.component.html',
  styleUrls: ['./pending-booking.component.css']
})
export class PendingBookingComponent implements OnInit {
  booking:any
    constructor(private svc:GetBookingService) { }
  
    ngOnInit() {
      this.svc.getBooking().subscribe(response => { 
        this.booking = response; 
      
          console.log(this.booking)
  
  })
  }
  }
  