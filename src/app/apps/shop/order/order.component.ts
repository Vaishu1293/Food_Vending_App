import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinner } from 'ngx-spinner';
import { AdminService } from 'src/app/services/service/admin.service';
import { OrderService } from 'src/app/services/service/order.service';
import { ProductService } from 'src/app/services/service/product.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  isAuth: boolean = false;

  userDomain: any;

  constructor(private adminService: AdminService,
    private productService: ProductService,
    private orderService: OrderService,
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinner) { }

  ngOnInit(): void {
    this.isAuth = this.adminService.getIsAuth();
    this.userDomain = this.adminService.getDomain();


  }


  checkUncheckAll(event:any) {
     var checkboxes = document.getElementsByTagName('input');
     if (event.target.checked) {
         for (var i = 0; i < checkboxes.length; i++) {
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = true;
             }
         }
     } else {
         for (var i = 0; i < checkboxes.length; i++) {
             // console.log(i)
             if (checkboxes[i].type == 'checkbox') {
                 checkboxes[i].checked = false;
             }
         }
     }
 }

}
