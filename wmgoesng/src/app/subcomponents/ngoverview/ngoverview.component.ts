import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngoverview',
  templateUrl: './ngoverview.component.html',
  styleUrls: ['./ngoverview.component.css']
})
export class NgoverviewComponent implements OnInit {

  slogan: string;

  constructor() {

    this.slogan = "it is time to launch for wmedia";

  }

  ngOnInit() {
  }

}
