import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coin-detail-quick-transfer',
  templateUrl: './coin-detail-quick-transfer.component.html',
  styleUrls: ['./coin-detail-quick-transfer.component.css']
})
export class CoinDetailQuickTransferComponent implements OnInit {

  @Input() data:any;

  constructor() { }

  ngOnInit(): void {
  }

}
