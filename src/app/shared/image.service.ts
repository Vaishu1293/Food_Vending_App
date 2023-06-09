import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  imageToShow: any;
  imageurl: any;

  constructor(private sanitizer: DomSanitizer) { }

  createImageFromBlob(img: any) {
    let objectUrl = 'data:image/jpeg;base64,' + img;

    this.imageToShow = this.sanitizer.bypassSecurityTrustUrl(objectUrl);
    return this.imageToShow;
  }

  b64toFile(dataURI: string): any {
    const byteString = atob(dataURI.split(',')[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }
    const file = new File([uint8Array], 'image.jpg', { type: 'image/jpeg' });
    this.imageurl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    return this.imageurl;
  }

}

