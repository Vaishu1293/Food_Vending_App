import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-button-with-forms',
  templateUrl: './button-with-forms.component.html',
  styleUrls: ['./button-with-forms.component.css']
})
export class ButtonWithFormsComponent implements OnInit {

  constructor() { }
  
  fontStyleControl = new UntypedFormControl();
  fontStyle?: string;

  ngOnInit(): void {
  }

}
