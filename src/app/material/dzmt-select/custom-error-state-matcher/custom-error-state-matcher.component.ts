import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-custom-error-state-matcher',
  templateUrl: './custom-error-state-matcher.component.html',
  styleUrls: ['./custom-error-state-matcher.component.css']
})
export class CustomErrorStateMatcherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  selected = new UntypedFormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  selectFormControl = new UntypedFormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  nativeSelectFormControl = new UntypedFormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

}
