import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-multiple-selection',
  templateUrl: './multiple-selection.component.html',
  styleUrls: ['./multiple-selection.component.css']
})
export class MultipleSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  toppings = new UntypedFormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

}
