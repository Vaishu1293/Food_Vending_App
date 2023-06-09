import { Component, OnInit } from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from 'src/app/services/service/admin.service';
import { ProductService } from 'src/app/services/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	toggleChat: boolean = true;
	toggleSingle: boolean = true;

  public userDomain: any;

  public searchValue: string = '';

  public user: any;

  public domain: string = 'Guest';

  public cart: any;

  public isAuth: boolean = false;

	constructor(private adminService: AdminService,
    private productService: ProductService) { }

	ngOnInit(): void {
    this.isAuth = this.adminService.getIsAuth();
    this.userDomain = this.adminService.getDomain();
    this.user = this.adminService.getUser();
    if(this.userDomain == 0){
      this.domain = 'Staff';
    } else {
      this.domain = 'customer'
    }
    // this.productService.sendbuyerProducts().subscribe(res => {
    //   this.cart = res.buyerProducts;
    //   console.log(this.cart);
    // });
	}


	togglechatbar() {
		this.toggleChat = !this.toggleChat;
	}
	singleChatWindow() {
		this.toggleSingle = !this.toggleSingle;
	}

  onLogout(){
    this.adminService.onLogoutall();
  }

  searchProducts(){
    console.log(this.searchValue);
  }

  openCart(){
    this.cart = this.productService.getCartItems();
  }

}
