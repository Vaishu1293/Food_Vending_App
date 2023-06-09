import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin-holding',
  templateUrl: './coin-holding.component.html',
  styleUrls: ['./coin-holding.component.css']
})
export class CoinHoldingComponent implements OnInit {

    @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
