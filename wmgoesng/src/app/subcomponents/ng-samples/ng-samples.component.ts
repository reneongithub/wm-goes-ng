import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-samples',
  templateUrl: './ng-samples.component.html',
  styleUrls: ['./ng-samples.component.css']
})
export class NgSamplesComponent implements OnInit {

  slogan: string;

  spinnOn: boolean;

  sidebarIsOpen: boolean;

  constructor() {

    this.slogan = "angular samples work";

    this.spinnOn = false;

    this.sidebarIsOpen = false;

  }

  ngOnInit() {
  }



  // component controls

  letSpinnerRunForAWhile(){
    this.spinnOn = true;
    setTimeout(() => {
      this.spinnOn = false;
    }, 5000);
  }

}
