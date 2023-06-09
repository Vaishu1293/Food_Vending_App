import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coin-details',
  templateUrl: './coin-details.component.html',
  styleUrls: ['./coin-details.component.css']
})
export class CoinDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
    aboutBtcArray : any = {
        image: "assets/images/svg/btc.svg",
        coin_name: "BTC",
        per_coin_price: "1 BTC = 68.48 USD",
        description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',
          
          
    };
        
    aboutEthArray : any = {
        image: "assets/images/svg/eth.svg",
        coin_name: "ETH",
        per_coin_price: "1 ETH = 68.48 USD",
        description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',
          
          
          
    };    
        
    aboutDashArray : any = {
        image: "assets/images/svg/dash.svg",
        coin_name: "DASH",
        per_coin_price: "1 DASH = 68.48 USD",
        description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',
          
          
          
    };    
        
    aboutLitArray : any = {
        image: "assets/images/svg/ltc.svg",
        coin_name: "LTC",
        per_coin_price: "1 LTC = 68.48 USD",
        description: '<p class="fs-14">Dash is an open source cryptocurrency. It is an altcoin that was forked from the Bitcoin protocol. It is also a decentralized autonomous organization (DAO) run by a subset of its users, which are called "masternodes". The currency permits transactions that can be untraceable.</p>',
          
          
          
    };

}
