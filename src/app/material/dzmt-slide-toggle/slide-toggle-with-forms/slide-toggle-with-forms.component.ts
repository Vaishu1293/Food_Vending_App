import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-slide-toggle-with-forms',
  templateUrl: './slide-toggle-with-forms.component.html',
  styleUrls: ['./slide-toggle-with-forms.component.css']
})
export class SlideToggleWithFormsComponent implements OnInit {


  isChecked = true;
  formGroup: UntypedFormGroup;

  constructor(formBuilder: UntypedFormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: '',
      acceptTerms: ['', Validators.requiredTrue]
    });
  }

  onFormSubmit() {
    alert(JSON.stringify(this.formGroup.value, null, 2));
  }
  
  
  ngOnInit(): void {
  }

}
