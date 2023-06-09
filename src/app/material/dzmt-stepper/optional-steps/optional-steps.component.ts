import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-optional-steps',
  templateUrl: './optional-steps.component.html',
  styleUrls: ['./optional-steps.component.css']
})
export class OptionalStepsComponent implements OnInit {


  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  isOptional = false;

  constructor(private _formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
  }

}
