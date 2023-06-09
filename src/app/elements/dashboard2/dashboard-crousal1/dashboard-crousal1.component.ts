import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard-crousal1',
  templateUrl: './dashboard-crousal1.component.html',
  styleUrls: ['./dashboard-crousal1.component.css']
})
export class DashboardCrousal1Component implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {

  }
  
  checkDirection() {
    var htmlClassName = document.getElementsByTagName('html')[0].getAttribute('class');
    if(htmlClassName == 'rtl') {
        return true;
    } else {
        return false;
    
    }
  }

    

  customOptions: OwlOptions = {
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
    dots: false,
    rtl: this.checkDirection(),
    navText: ['', ''],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2
        },
        760:{
            items:3
        },	
        991:{
            items:4
        },			
        
        1200:{
            items:4
        },
        1601:{
            items:5
        }
    }
  }

}
