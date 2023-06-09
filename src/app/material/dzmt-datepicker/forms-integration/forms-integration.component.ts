import { Component, OnInit } from '@angular/core';
import {UntypedFormGroup, UntypedFormControl} from '@angular/forms';


@Component({
  selector: 'app-forms-integration',
  templateUrl: './forms-integration.component.html',
  styleUrls: ['./forms-integration.component.css']
})
export class FormsIntegrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  range = new UntypedFormGroup({
    start: new UntypedFormControl(),
    end: new UntypedFormControl()
  });

}
