import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-wallets',
  templateUrl: './my-wallets.component.html',
  styleUrls: ['./my-wallets.component.css']
})
export class MyWalletsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  cardsArray = [
        {
          bg_image: "assets/images/pattern/pattern1.png",
          card_class: "bg-secondary",
          title: "Main Wallet",
          price: "$45.500,12",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo.png",
        },
        {
          bg_image: "assets/images/pattern/pattern2.png",
          card_class: "bg-success",
          title: "XYZ Wallet",
          price: "$250,5",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo2.png",
        },
        {
          bg_image: "assets/images/pattern/pattern3.png",
          card_class: "bg-primary",
          title: "XYZ Wallet",
          price: "$250,5",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo.png",
        },
        {
          bg_image: "assets/images/pattern/pattern4.png",
          card_class: "bg-info",
          title: "XYZ Wallet",
          price: "$250,5",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo2.png",
        },{
          bg_image: "assets/images/pattern/pattern1.png",
          card_class: "bg-secondary",
          title: "Main Wallet",
          price: "$45.500,12",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo.png",
        },
        {
          bg_image: "assets/images/pattern/pattern2.png",
          card_class: "bg-success",
          title: "XYZ Wallet",
          price: "$250,5",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo2.png",
        },
        {
          bg_image: "assets/images/pattern/pattern3.png",
          card_class: "bg-primary",
          title: "XYZ Wallet",
          price: "$250,5",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo.png",
        },
        {
          bg_image: "assets/images/pattern/pattern4.png",
          card_class: "bg-info",
          title: "XYZ Wallet",
          price: "$250,5",
          card_no: "444 221 224 ***",
          card_logo: "assets/images/card-logo2.png",
        },
  ];

}
