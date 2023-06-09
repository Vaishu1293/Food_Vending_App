import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-displays-errors-in-steps',
  templateUrl: './displays-errors-in-steps.component.html',
  styleUrls: ['./displays-errors-in-steps.component.css'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class DisplaysErrorsInStepsComponent implements OnInit {

  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;

  constructor(private _formBuilder: UntypedFormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

}
