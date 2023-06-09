import { Component, OnInit, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-quick-transfer',
  templateUrl: './quick-transfer.component.html',
  styleUrls: ['./quick-transfer.component.css']
})
export class QuickTransferComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

  customOptions: OwlOptions = {
    loop:true,
    autoplay:true,
    margin:20,
    nav:false,
    rtl:true,
    dots: false,
    navText: ['', ''],
    responsive:{
        0:{
            items:3
        },
        450:{
            items:4
        },
        600:{
            items:5
        },	
        991:{
            items:5
        },			
        
        1200:{
            items:7
        },
        1601:{
            items:5
        }
    }
  }

}
