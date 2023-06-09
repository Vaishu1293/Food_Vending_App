import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-field-theming',
  templateUrl: './field-theming.component.html',
  styleUrls: ['./field-theming.component.css']
})
export class FieldThemingComponent implements OnInit {

  options!: UntypedFormGroup;
  colorControl = new UntypedFormControl('primary');
  fontSizeControl = new UntypedFormControl(16, Validators.min(10));

  constructor(fb: UntypedFormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
    });
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }


  ngOnInit(): void {
  }

}
