import { FaqsGetService } from './../faqs-get.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  faq:any
    constructor(private svc:FaqsGetService) { }
  
    ngOnInit() {
      this.svc.getFaqs().subscribe(response => { 
        this.faq = response; 
      
          console.log(this.faq)
  
  })
  }
  }