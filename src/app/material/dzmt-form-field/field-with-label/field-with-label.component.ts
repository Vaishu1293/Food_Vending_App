import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormControl, UntypedFormGroup} from '@angular/forms';


@Component({
  selector: 'app-field-with-label',
  templateUrl: './field-with-label.component.html',
  styleUrls: ['./field-with-label.component.css']
})
export class FieldWithLabelComponent implements OnInit {

  options!: UntypedFormGroup;
  hideRequiredControl = new UntypedFormControl(false);
  floatLabelControl = new UntypedFormControl('auto');

  constructor(fb: UntypedFormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
  }

  ngOnInit(): void {
  }

}
