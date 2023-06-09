import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageToShow: any;
  imageurl: any;

  constructor(private sanitizer: DomSanitizer) { }

  createImageFromBlob(img: any): SafeUrl {
    console.log(img);
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onloadend = () => {
      this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(reader.result as string);
    };
    return this.imageToShow;
  }


  b64toFile(dataURI: any): any {
    let TYPED_ARRAY = new Uint8Array(dataURI);
    const STRING_CHAR = String.fromCharCode.apply(null, Array.from<number>(TYPED_ARRAY));
    let base64String = btoa(STRING_CHAR);
    this.imageurl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64, '+ base64String);

    return this.imageurl;
  }
}
