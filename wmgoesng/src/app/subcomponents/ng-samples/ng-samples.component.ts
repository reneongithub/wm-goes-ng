import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ng-samples',
  templateUrl: './ng-samples.component.html',
  styleUrls: ['./ng-samples.component.css']
})
export class NgSamplesComponent implements OnInit {

  spinnOn: boolean;

  sidebarIsOpen: boolean;

  // form inputs setup
  options: FormGroup;

  // datepicker
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  ngOnInit() {

    this.spinnOn = false;

    this.sidebarIsOpen = true;
  }



  // component controls

  letSpinnerRunForAWhile(){

    this.spinnOn = true;

    setTimeout( () => { this.spinnOn = false }, 5000);
  }


}
