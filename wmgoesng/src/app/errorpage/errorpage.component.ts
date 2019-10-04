import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-errorpage',
  templateUrl: './errorpage.component.html',
  styleUrls: ['./errorpage.component.css']
})
export class ErrorpageComponent implements OnInit {

  slogan: string;

  constructor() {

    this.slogan = "something went wrong!!";

  }

  ngOnInit() {
  }

}
