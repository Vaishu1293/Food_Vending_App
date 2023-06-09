import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index4',
  templateUrl: './index4.component.html',
  styleUrls: ['./index4.component.css']
})
export class Index4Component implements OnInit {

  constructor() { 
        this.setThemeVersion();
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
  setThemeVersion() {
    document.body.setAttribute('data-theme-version', 'dark');
  }

  ngOnInit(): void {
  }
  
    ngOnDestroy(): void {
      document.body.setAttribute('data-theme-version', 'light');
      
    }

}
