import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { Order } from '../models/order';

const BACKEND_URL = environment.apiURL + 'api/order/';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  userProductsUpdated = new Subject<{ products: Product[], productCount: number }>();
  buyerProductsUpdated = new Subject<{ buyerProducts: Product[], buyerProductCount: number }>();
  allUserProductsUpdated = new Subject<{ allProducts: Product[], allProductCount: number }>();

  newProductAdded = new Subject<{ product: Product }>();
  newProductSubscribed = new Subject<{ buyerProduct: Product }>();

  products: Product[] = [];
  totalProducts: number = 0;

  buyerProducts: Product[] = [];
  buyerTotalProducts: number = 0;

  allProducts: Product[] = [];
  allTotalProducts: number = 0;

  constructor(private http: HttpClient, private router: Router) { }

  // Observables-

  senduserProducts() {
    this.getUserProducts();
    return this.userProductsUpdated.asObservable();
  }

  sendbuyerProducts() {
    return this.buyerProductsUpdated.asObservable();
  }

  sendallUserProducts() {
    return this.allUserProductsUpdated.asObservable();
  }

  //----------------------------------------------------------------------------------------------------------------------------
  //----------------------------------------------------------------------------------------------------------------------------

  // ADMIN PRODUCTS ROUTES-

  addOrder(orderData: Order): Observable<{ order: Order, user: any, message: string }> {
    return this.http.post<{ order: Order, user: any, message: string }>(BACKEND_URL + "order", orderData);
  }

  getUserProducts(productsPerPage?: number, currentPage?: number, selected?: string, selectedOption?: string) {
    const queryParams = `?limit=${productsPerPage}&skip=${currentPage}&sortBy=${selected}:${selectedOption}`;
    this.http.get<{ owner: string, products: Product[], productsCount: number }>(BACKEND_URL + "user-products" + queryParams).pipe(map(productData => {
      return {
        owner: productData.owner,
        products: productData.products.map(product => {

          let productInfo = {
            _id: product._id,
            product_name: product.product_name,
            brand_name:product.brand_name,
            description: product.description,
            nutrition_facts: product.nutrition_facts,
            stocks: product.stocks,
            price: product.price,
            expiration_date: product.expiration_date,
            country_of_origin: product.country_of_origin,
            product_category: product.product_category,
            product_image: product.product_image,
            owner: product.owner,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
            buyers: product.buyers
          }

          return productInfo;
        }),
        maxProducts: productData.productsCount
      };
    })).subscribe(response => {
      //console.log(response);
      this.products = response.products;
      this.totalProducts = response.maxProducts;
      this.userProductsUpdated.next({ products: [...this.products], productCount: response.maxProducts });
    }, error => {
        this.router.navigate(['admin','dashboard-4']);
    });

    return { products: [...this.products], maxProducts: this.totalProducts };
  }

  getUserProduct(id: string) {
    return this.http.get<{ product: Product, owner: any, domain: any }>(BACKEND_URL + "products/" + id).pipe(map(productData => {
      return {
        owner: productData.owner,
        product: {
          _id: productData.product._id,
          product_name: productData.product.product_name,
          brand_name:productData.product.brand_name,
          description: productData.product.description,
          nutrition_facts: productData.product.nutrition_facts,
          stocks: productData.product.stocks,
          price: productData.product.price,
          expiration_date: productData.product.expiration_date,
          country_of_origin: productData.product.country_of_origin,
          product_category: productData.product.product_category,
          product_image: productData.product.product_image,
          owner: productData.product.owner,
          createdAt: productData.product.createdAt,
          updatedAt: productData.product.updatedAt,
          buyers: productData.product.buyers
        },
        domain: productData.domain
      };
    }
    ));
  }

  updateProduct(productData: Product, id: string): Observable<{ message: string, product: Product, Id: string }> {
    return this.http.put<{ message: string, product: Product, Id: string }>(BACKEND_URL + "products/" + id, productData)
  }

  deleteProduct(id: string) {
    return this.http.delete<{ message: string, owner: any, domain: any }>(BACKEND_URL + "products/" + id).pipe(map(productData => {
      return {
        message: productData.message,
        owner: productData.owner,
        domain: productData.domain
      };
    }
    ));
  }


//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

  // CUSTOMER_PRODUCTS ROUTES:-

  // GET LIST OF ALL PRODUCTS OPEN TO BOTH REGISTERED AS WELL AS UNREGISTERED USERS

   getAllProducts(productsPerPage?: number, currentPage?: number, selected?: string, selectedOption?: string) {
    const queryParams = `?limit=${productsPerPage}&skip=${currentPage}&sortBy=${selected}:${selectedOption}`;
    this.http.get<{ products: Product[], productsCount: number }>(BACKEND_URL + "allproducts" + queryParams).pipe(map(productData => {
      return {
        products: productData.products.map(product => {

          let productInfo = {
            _id: product._id,
            product_name: product.product_name,
            brand_name:product.brand_name,
            description: product.description,
            nutrition_facts: product.nutrition_facts,
            stocks: product.stocks,
            price: product.price,
            expiration_date: product.expiration_date,
            country_of_origin: product.country_of_origin,
            product_category: product.product_category,
            product_image: product.product_image,
            owner: product.owner,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
            buyers: product.buyers
          }
          return productInfo;
        }),
        maxProducts: productData.productsCount
      };
    })).subscribe(response => {
      //console.log(response);
      this.allProducts = response.products;
      this.allTotalProducts = response.maxProducts;
      this.allUserProductsUpdated.next({ allProducts: [...this.allProducts], allProductCount: response.maxProducts });
    }, error => {
      this.router.navigate(['admin','page-error-404']);
    });

    return { allProducts: [...this.allProducts], maxProducts: this.allTotalProducts };
  }

  // Get One Product for All Users:

  getAllProduct(id: string) {
    return this.http.get<{ product: Product, owner: string }>(BACKEND_URL + "allproducts/get/" + id).pipe(map(productData => {
      return {
        owner: productData.owner,
        product: {
          _id: productData.product._id,
          product_name: productData.product.product_name,
          brand_name:productData.product.brand_name,
          description: productData.product.description,
          nutrition_facts: productData.product.nutrition_facts,
          stocks: productData.product.stocks,
          price: productData.product.price,
          expiration_date: productData.product.expiration_date,
          country_of_origin: productData.product.country_of_origin,
          product_category: productData.product.product_category,
          product_image: productData.product.product_image,
          owner: productData.product.owner,
          createdAt: productData.product.createdAt,
          updatedAt: productData.product.updatedAt,
          buyers: productData.product.buyers
        }
      };
    }
    ));
  }

  // onSubscribeTask(id: string, buyer: string) {
  //   this.http.patch<{ product: any, user: any, msg: string }>(BACKEND_URL + "tasks/buy/" + id, buyer).subscribe((response) => {
  //     this.buyerProductsUpdated.next({ buyerProducts: [...this.buyerProducts], buyerProductCount: this.buyerTotalProducts });
  //     window.alert("Successfully Subscribed!!!");
  //   }, error => {
  //       window.location.reload();
  //   });
  // }

 //---------------------------------------ADD PRODUCT TO CART -------------------------------------------------------------------

 addProductToCart(product: any, numValue: number) {
  var productData = {
    product: product,
    quantity: numValue,
    price: product.price
  };

  let cart = JSON.parse(localStorage.getItem("Cart") || "[]");

  let itemFound = false;

  cart.forEach((item: any) => {
    if (item.product._id === productData.product._id) {
      item.quantity += productData.quantity;
      item.price = product.price;
      itemFound = true;
    }
  });

  if (!itemFound) {
    cart.push(productData);
  }

  const length = cart.length;
  localStorage.setItem("Cart", JSON.stringify(cart));
  this.buyerProductsUpdated.next({ buyerProducts: [...cart], buyerProductCount: length });
}


getCartItems() {
  // Retrieve cart items from localStorage
  const cart = JSON.parse(localStorage.getItem("Cart") || "[]");

  // Return the cart items
  return cart;
}
}
