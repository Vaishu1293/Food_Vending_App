import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-dzmt-autocomplete-simple',
  templateUrl: './dzmt-autocomplete-simple.component.html',
  styleUrls: ['./dzmt-autocomplete-simple.component.css']
})
export class DzmtAutocompleteSimpleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   myControl = new UntypedFormControl();
  options: string[] = ['One', 'Two', 'Three'];

}
