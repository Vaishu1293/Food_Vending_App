import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/services/models/product';
import { AdminService } from 'src/app/services/service/admin.service';
import { ProductService } from 'src/app/services/service/product.service';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  products: Product[] = [];

  imagePreview: string | ArrayBuffer | any = '';
  imageSource: any;
  imageSourceFile: any;
  imageSources: string[] = [];
  p: boolean = false;
  userDomain: any;
  isLoading: boolean = true;

  constructor(private productService: ProductService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private adminService: AdminService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

    this.userDomain = this.adminService.getDomain();

    if (this.userDomain == 0) {
      this.productService.getUserProducts();
      this.productService.senduserProducts().subscribe((products) => {
        console.log(products);
        this.products = products.products;
        this.isLoading = false;
      });
    } else if (this.userDomain == 1 || this.userDomain == undefined) {
      this.productService.getAllProducts();
      this.productService.sendallUserProducts().subscribe((products) => {
        console.log(products);
        this.products = products.allProducts;
        this.isLoading = false;
      });

    }
  }

  getImageFile(img: any) {
    this.imageSourceFile = this.imageService.b64toFile(img);
    return this.imageSourceFile;
  }

  getImage(img: any) {
    console.log(img);
    this.imageSource = this.imageService.createImageFromBlob(img);
    return this.imageSource;
  }

  convertBase64ToImage(base64Image: any) {
    let objectUrl = 'data:image/jpeg;base64,' + base64Image;

    this.imageSource = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    return this.imageSource;
  }


}
