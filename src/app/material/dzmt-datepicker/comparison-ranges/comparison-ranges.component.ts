import { Component, OnInit } from '@angular/core';
import {UntypedFormGroup, UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-comparison-ranges',
  templateUrl: './comparison-ranges.component.html',
  styleUrls: ['./comparison-ranges.component.css']
})
export class ComparisonRangesComponent implements OnInit {



  ngOnInit(): void {
  }
  
  
  campaignOne!: UntypedFormGroup;
  campaignTwo!: UntypedFormGroup;

  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new UntypedFormGroup({
      start: new UntypedFormControl(new Date(year, month, 13)),
      end: new UntypedFormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new UntypedFormGroup({
      start: new UntypedFormControl(new Date(year, month, 15)),
      end: new UntypedFormControl(new Date(year, month, 19))
    });
  }
  
  

}
