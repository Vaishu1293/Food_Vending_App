import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-buy-sell-form',
  templateUrl: './buy-sell-form.component.html',
  styleUrls: ['./buy-sell-form.component.css']
})
export class BuySellFormComponent implements OnInit {
    
    @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
