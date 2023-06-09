import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/service/admin.service';
import { OrderService } from 'src/app/services/service/order.service';
import { ProductService } from 'src/app/services/service/product.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private adminService: AdminService) { }

  cart: any;

  totalItems = 0;

  isLoading: boolean = true;

  order_total: any;

  ngOnInit(): void {
    this.cart = this.productService.getCartItems();

    for (let item of this.cart){
      this.totalItems += item.quantity;
    }

    this.isLoading = false;
  }

  calculateTotalPrice(){
    this.order_total = 0;
    for (let item of this.cart){
      this.order_total += (item.quantity * item.price);
    }
    return Number(this.order_total.toFixed(2));
  }

  removeCartItem(i: number) {
    this.cart.splice(i, 1);
    this.onQuantityChange();
  }

  onQuantityChange(){
    this.totalItems = 0;
    for (let item of this.cart){
      this.totalItems += item.quantity;
    }
  }

  onConfirmOrder(){
    let prod = []

    let buyer = this.adminService.getUser();

    for (let item of this.cart){
      let data = {
        productId: item.product._id,
        product_price: item.price,
        quantity: item.quantity,
        owner: item.product.owner
      }
      prod.push(data);
    }

    const orderData = {
      products: prod,
      order_total: this.order_total,
      order_status: true,
      buyer: buyer._id
    };

    this.orderService.addOrder(orderData).subscribe(order => {
      console.log(order);
      window.alert(order.message);
      this.productService.clearCart();
      this.router.navigate(['/admin/ecom-product-list']);
    }, error => {
      window.alert(error.error.message);
    })

  }

}
