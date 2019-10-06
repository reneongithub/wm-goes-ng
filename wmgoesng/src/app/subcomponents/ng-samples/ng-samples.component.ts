import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-samples',
  templateUrl: './ng-samples.component.html',
  styleUrls: ['./ng-samples.component.css']
})
export class NgSamplesComponent implements OnInit {

  spinnOn: boolean;

  sidebarIsOpen: boolean;

  constructor() {
    //
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
