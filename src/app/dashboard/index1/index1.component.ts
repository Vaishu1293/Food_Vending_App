import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.css']
})
export class Index1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  quickTransfer = [
        {
          name: "Samuel",
          username: "@sam224",
          image: "assets/images/contacts/1.jpg",
        },
        {
          name: "Cindy",
          username: "@cindyss",
          image: "assets/images/contacts/2.jpg",
        },
        {
          name: "David",
          username: "@davidxc",
          image: "assets/images/contacts/3.jpg",
        },
        {
          name: "Martha",
          username: "@marthaa",
          image: "assets/images/contacts/4.jpg",
        },
        {
          name: "Olivia",
          username: "@oliv62",
          image: "assets/images/contacts/5.jpg",
        },
  ];

}
