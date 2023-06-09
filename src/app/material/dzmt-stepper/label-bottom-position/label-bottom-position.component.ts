import { Component, OnInit } from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-label-bottom-position',
  templateUrl: './label-bottom-position.component.html',
  styleUrls: ['./label-bottom-position.component.css']
})
export class LabelBottomPositionComponent implements OnInit {
  
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
