import { Component, ElementRef, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UntypedFormGroup,  UntypedFormBuilder,  Validators, FormControl, AbstractControl } from '@angular/forms';
import { ImageService } from 'src/app/services/service/image.service';
import { minDateValidator } from './validators/date.validators';
import { formatDate } from '@angular/common';
import { ProductService } from 'src/app/services/service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-validate',
  templateUrl: './form-validate.component.html',
  styleUrls: ['./form-validate.component.css']
})
export class FormValidateComponent implements OnInit, OnDestroy {

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  imagePreview: string | ArrayBuffer | any = '';
  imageSource: any;
  imageSourceFile: any;

  currentDate = new Date();
  minExpirationDate = formatDate(this.currentDate, 'yyyy-MM-dd', 'en');

  productId: string = '';

  //private isAuth: boolean = false;
  //private authStatusSub: Subscription;

  productData: any = {};

	ngOnInit(): void {
    this.productId = '';
    this.route.queryParams.subscribe(params => {
      // Access the query parameters here
      const id = params.id;
      this.productId = id;
      // Perform necessary actions based on the presence of the query parameters
      if (id) {
        // Query parameters are present, perform update mode
        // ...
        this.productService.getUserProduct(id).subscribe(product => {
          //console.log(product.product.nutrition_facts.Calories);

          this.angForm.patchValue({
            product_name: product.product.product_name,
            brand_name: product.product.brand_name,
            description: product.product.description,
            calories: product.product.nutrition_facts.Calories,
            fat: product.product.nutrition_facts.Fat,
            saturated_fat: product.product.nutrition_facts.Saturated_fat,
            cholesterol: product.product.nutrition_facts.Cholesterol,
            sodium: product.product.nutrition_facts.Sodium,
            carbohydrates: product.product.nutrition_facts.Carbohydrates,
            fiber: product.product.nutrition_facts.Fiber,
            sugar: product.product.nutrition_facts.Sugar,
            protein: product.product.nutrition_facts.Protein,
            stocks: product.product.stocks,
            price: product.product.price,
            expiration_date: product.product.expiration_date,
            country_of_origin: product.product.country_of_origin,
            product_category: product.product.product_category
          });

          this.angForm.controls['product_category'].setValue(product.product.product_category);
        });
      } else{
        this.productId = '';
      }
    });
  }


  angForm: UntypedFormGroup | any;

  constructor(private fb: UntypedFormBuilder,
    private imageService: ImageService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      product_name: ['', [Validators.required]],
      brand_name: ['', [Validators.required]],
      description: [''],
      allergens: [''],
      calories: [''],
      fat: [''],
      saturated_fat: [''],
      cholesterol: [''],
      sodium: [''],
      carbohydrates: [''],
      fiber: [''],
      sugar: [''],
      protein: [''],
      stocks: [''],
      price: ['', [Validators.required]],
      expiration_date: ['', [Validators.required, minDateValidator]],
      country_of_origin: [''],
      product_category: [''],
      product_image: new FormControl(null) // Use FormControl for uploaded file
    });
  }

  onAddProduct() {
    const form_data = new FormData();
    form_data.append('product_name', this.angForm.get('product_name').value);
    form_data.append('brand_name', this.angForm.get('brand_name').value);
    form_data.append('description', this.angForm.get('description').value);
    form_data.append('allergens', this.angForm.get('allergens').value);

    // Append nutrition_facts as a JSON string
    const nutritionFacts = {
      Calories: this.angForm.get('calories').value,
      Fat: this.angForm.get('fat').value,
      Saturated_Fat: this.angForm.get('saturated_fat').value,
      Cholesterol: this.angForm.get('cholesterol').value,
      Sodium: this.angForm.get('sodium').value,
      Carbohydrate: this.angForm.get('carbohydrates').value,
      Fiber: this.angForm.get('fiber').value,
      Sugar: this.angForm.get('sugar').value,
      Protein: this.angForm.get('protein').value
    };
    form_data.append('nutrition_facts', JSON.stringify(nutritionFacts));

    form_data.append('stocks', this.angForm.get('stocks').value);
    form_data.append('price', this.angForm.get('price').value);
    form_data.append('expiration_date', this.angForm.get('expiration_date').value);
    form_data.append('country_of_origin', this.angForm.get('country_of_origin').value);
    form_data.append('product_category', this.angForm.get('product_category').value);

    // Append the file to form_data
    const inputElement = this.fileInput.nativeElement as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      form_data.append('product_image', file);
    }

    this.productData = form_data

    this.productService.addProduct(this.productData).subscribe((response) => {
      window.alert(response.message);
      this.angForm.reset();
    }, error => {
      console.log(error);
      window.alert(error);
    });
  }

  onUpdateProduct(){
    const form_data = new FormData();
    form_data.append('product_name', this.angForm.get('product_name').value);
    form_data.append('brand_name', this.angForm.get('brand_name').value);
    form_data.append('description', this.angForm.get('description').value);
    form_data.append('allergens', this.angForm.get('allergens').value);

    // Append nutrition_facts as a JSON string
    const nutritionFacts = {
      Calories: this.angForm.get('calories').value,
      Fat: this.angForm.get('fat').value,
      Saturated_Fat: this.angForm.get('saturated_fat').value,
      Cholesterol: this.angForm.get('cholesterol').value,
      Sodium: this.angForm.get('sodium').value,
      Carbohydrate: this.angForm.get('carbohydrates').value,
      Fiber: this.angForm.get('fiber').value,
      Sugar: this.angForm.get('sugar').value,
      Protein: this.angForm.get('protein').value
    };
    form_data.append('nutrition_facts', JSON.stringify(nutritionFacts));

    form_data.append('stocks', this.angForm.get('stocks').value);
    form_data.append('price', this.angForm.get('price').value);
    form_data.append('expiration_date', this.angForm.get('expiration_date').value);
    form_data.append('country_of_origin', this.angForm.get('country_of_origin').value);
    form_data.append('product_category', this.angForm.get('product_category').value);

    // Append the file to form_data
    const inputElement = this.fileInput.nativeElement as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      form_data.append('product_image', file);
    }

    this.productData = form_data

    this.productService.updateProduct(this.productData, this.productId).subscribe((response) => {
      console.log(response);
      window.alert(response.message);
      this.router.navigate(['admin','ecom-product-detail', this.productId]);
    }, error => {
      console.log(error);
      window.alert(error.error.error);
    });
  }

  onImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // No need to convert to Uint8Array, keep it as Blob/File object
          this.angForm.get('product_image').setValue(file);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }


  getImageFile(img: any) {
    this.imageSourceFile = this.imageService.b64toFile(img);
    return this.imageSourceFile;
  }

  getImage(img: any) {
    this.imageSource = this.imageService.createImageFromBlob(img);
    return this.imageSource;
  }

  ngOnDestroy() {
    this.productId = '';
  }

}
