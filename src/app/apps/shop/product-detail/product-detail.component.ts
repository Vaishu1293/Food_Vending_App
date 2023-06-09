import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { Product } from 'src/app/services/models/product';
import { AdminService } from 'src/app/services/service/admin.service';
import { ProductService } from 'src/app/services/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private sanitizer: DomSanitizer,
    private adminService: AdminService,
    private spinner: NgxSpinnerService
  ) {}

  isLoading: boolean = true;

  imageSrc: any;

  sizeClass = '';

  productId: string = '';

  product: any;

  userDomain: number = 0;

  isProductDefined: boolean = false;

  numValue: number = 1;

  ngOnInit(): void {

    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 2 seconds */
      this.spinner.hide();
    }, 2000);

    this.userDomain = this.adminService.getDomain();

    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      console.log(this.userDomain);
      if (this.userDomain == 0) {
        this.productService
          .getUserProduct(this.productId)
          .subscribe((product) => {
            this.product = product.product;
            this.userDomain = product.domain;
            //let objectUrl = 'data:image/jpeg;base64,' + this.product.product_image;
            this.imageSrc =
              'data:image/png;base64,' + this.product.product_image;
            this.isProductDefined = true;
            console.log(this.product);
            this.isLoading = false;
          });
      } else if (this.userDomain == 1 || this.userDomain == undefined) {
        this.productService
          .getAllProduct(this.productId)
          .subscribe((product) => {
            this.product = product.product;
            //let objectUrl = 'data:image/jpeg;base64,' + this.product.product_image;
            this.imageSrc =
              'data:image/png;base64,' + this.product.product_image;
            this.isProductDefined = true;
            console.log(this.product);
            this.isLoading = false;
          });
      }
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  onClick(imagename: any) {
    if (imagename == '1.jpg') {
      this.imageSrc = 'data:image/jpeg;base64,' + this.product.product_image;
    } else {
      this.imageSrc = 'assets/foods/' + imagename;
    }
  }

  onDelete(id: string) {
    this.productService.deleteProduct(id).subscribe((response) => {
      window.alert(response.message);
      this.router.navigate(['/admin/ecom-product-list']);
    });
  }

  open(content: any) {
    this.modalService.open(content);
  }

  toggleSizeClass(size: any) {
    this.sizeClass = size;
  }

  navigateToForm(id?: string) {
    this.router.navigate(['/admin/add-product/'], { queryParams: { id: id } });
  }

  onAddToCart(product: any){
    this.productService.addProductToCart(product, this.numValue);
  }
}

