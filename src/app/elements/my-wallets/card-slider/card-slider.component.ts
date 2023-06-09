import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.css']
})
export class CardSliderComponent implements OnInit {
    
  @Input() data:any;
  
  customOptions!: OwlOptions;


  constructor() { }

  ngOnInit() {
    setTimeout(() => {
        
        this.customOptions = {
            loop:false,
            margin:10,
            nav:false,
            autoWidth:true,
            rtl: this.checkDirection(),
            dots: false,
            navText: ['', ''],
            responsiveRefreshRate: 100,
            items:4
            /* responsive:{
                0:{
                    items:1
                },
                450:{
                    items:1,
                    // margin:20,
                },
                760:{
                    items:2,
                    // margin:20,
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
            } */

        }
 
        
    }, 300);

  }
  
  checkDirection() {
    var htmlClassName = document.getElementsByTagName('html')[0].getAttribute('class');
    if(htmlClassName == 'rtl') {
        return true;
    } else {
        return false;
    }
  }

  /* customOptions: OwlOptions = {
    loop:false,
    margin:10,
    nav:true,
    autoWidth:true,
    rtl: this.checkDirection(),
    dots: false,
    navText: ['', ''],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2,
            margin:20,
        },
        760:{
            items:2,
            margin:20,
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
  } */

}
