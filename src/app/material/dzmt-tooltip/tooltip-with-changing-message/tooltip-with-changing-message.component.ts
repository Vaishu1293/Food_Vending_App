import { Component, OnInit } from '@angular/core';
import {UntypedFormControl} from '@angular/forms';

@Component({
  selector: 'app-tooltip-with-changing-message',
  templateUrl: './tooltip-with-changing-message.component.html',
  styleUrls: ['./tooltip-with-changing-message.component.css']
})
export class TooltipWithChangingMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  message = new UntypedFormControl('Info about the action');

}
