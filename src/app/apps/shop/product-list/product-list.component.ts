import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/services/models/product';
import { AdminService } from 'src/app/services/service/admin.service';
import { ProductService } from 'src/app/services/service/product.service';
import { ImageService } from 'src/app/shared/image.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  userDomain: any;

  isLoading: boolean = true;

  products: Product[] = [];

  imagePreview: string | ArrayBuffer | any = '';
  imageSource: any;
  imageSourceFile: any;
  imageSources: string[] = [];
  p: boolean = false;

  constructor(
    private productService: ProductService,
    private imageService: ImageService,
    private sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private adminService: AdminService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

    this.userDomain = this.adminService.getDomain();

    console.log(this.userDomain);

    if(this.userDomain == 1 || this.userDomain == null){
      this.productService.getAllProducts();
      this.productService.sendallUserProducts().subscribe((products) => {
        console.log(products);
        this.products = products.allProducts;
        this.isLoading = false;
      });
    }else if (this.userDomain == 0) {
      this.productService.getUserProducts();
      this.productService.senduserProducts().subscribe((products) => {
        console.log(products);
        this.products = products.products;
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

  open(content: any) {
    this.modalService.open(content);
  }
}
