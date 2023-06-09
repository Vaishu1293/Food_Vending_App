import { Component, OnInit } from '@angular/core';
import {UntypedFormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-input-with-error-message',
  templateUrl: './input-with-error-message.component.html',
  styleUrls: ['./input-with-error-message.component.css']
})
export class InputWithErrorMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

}
