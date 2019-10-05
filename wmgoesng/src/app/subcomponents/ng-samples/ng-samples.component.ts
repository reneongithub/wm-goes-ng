import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-samples',
  templateUrl: './ng-samples.component.html',
  styleUrls: ['./ng-samples.component.css']
})
export class NgSamplesComponent implements OnInit {

  slogan: string;

  constructor() {

    this.slogan = "angular samples work";

  }

  ngOnInit() {
  }

}
