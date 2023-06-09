import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-datepicker-selected-value',
  templateUrl: './datepicker-selected-value.component.html',
  styleUrls: ['./datepicker-selected-value.component.css']
})
export class DatepickerSelectedValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  date = new UntypedFormControl(new Date());
  serializedDate = new UntypedFormControl((new Date()).toISOString());

}
