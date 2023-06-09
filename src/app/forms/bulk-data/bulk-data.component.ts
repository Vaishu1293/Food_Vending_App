import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormGroup,  UntypedFormBuilder,  Validators, FormControl, AbstractControl } from '@angular/forms';
import { ImageService } from 'src/app/services/service/image.service';
import { formatDate } from '@angular/common';
import { ProductService } from 'src/app/services/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bulk-data',
  templateUrl: './bulk-data.component.html',
  styleUrls: ['./bulk-data.component.css']
})
export class BulkDataComponent implements OnInit {

  @ViewChild('jsonfileInput') jsonfileInput: ElementRef<HTMLInputElement>;
  @ViewChild('imagefileInput') imagefileInput: ElementRef<HTMLInputElement>;

  imagePreview: string | ArrayBuffer | any = '';
  imageSource: any;
  imageSourceFile: any;


  //private isAuth: boolean = false;
  //private authStatusSub: Subscription;

  productData: any = {};

  base64Images: any[] = [];

	ngOnInit(): void {
  }


  angForm: UntypedFormGroup | any;

  constructor(private fb: UntypedFormBuilder,
    private imageService: ImageService,
    private productService: ProductService,
    private router: Router) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      bulk_data: new FormControl(null), // Use FormControl for uploaded file
      product_image: new FormControl(null) // Use FormControl for uploaded file
    });
  }

  onAddProduct() {
    const form_data = new FormData();

    // Append the JSON file to form_data
    const jsonInputElement = this.jsonfileInput.nativeElement as HTMLInputElement;
    if (jsonInputElement.files && jsonInputElement.files.length > 0) {
      const jsonFile = jsonInputElement.files[0];
      form_data.append('bulk_data', jsonFile);
    }

    // Get the selected image files
    const imageFiles = this.angForm.get('product_image').value as File[];

    // Initialize a new object to hold base64 image data
    const base64Images = {};

    // Process image files
    for (let i = 0; i < imageFiles.length; i++) {
      const imageFile = imageFiles[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        // Convert image file to base64 string
        const base64Image = reader.result as string;
        // Add the base64 string to the object with the index as the key
        this.base64Images[i] = base64Image;
        // When all images are processed, create a JSON file and append it to form_data
        if (i === imageFiles.length - 1) {
          const blob = new Blob([JSON.stringify(this.base64Images)], {type: 'application/json'});
          form_data.append('product_image', blob, 'product_image.json');
          this.sendFormData(form_data);
        }
      };
      reader.readAsDataURL(imageFile);
    }
  }

  // Function to send the form_data to the server
  sendFormData(form_data: any) {
    this.productService.bulkUpload(form_data).subscribe(
      (response) => {
        window.alert(response.message);
        this.router.navigate(['admin','ecom-product-grid']);
      },
      (error) => {
        window.alert(error.error.message);
      }
    );
  }

  onFilePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          // No need to convert to Uint8Array, keep it as Blob/File object
          this.angForm.get('bulk_data').setValue(file);
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }

  onImagePicked(event: Event) {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const files = Array.from(inputElement.files);
      this.angForm.get('product_image').setValue(files);

      // Optional: Display the selected file names in the label
      const labelElement = inputElement.nextElementSibling as HTMLLabelElement;
      if (labelElement) {
        const fileNames = files.map((file) => file.name).join(', ');
        labelElement.textContent = fileNames;
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

}
