import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbac',
  templateUrl: './rbac.component.html',
  styleUrls: ['./rbac.component.css']
})
export class RbacComponent implements OnInit {

  slogan: string;

  constructor() {

    this.slogan = "rbac works";

  }

  ngOnInit() {
  }

}
