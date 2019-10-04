import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  router: Router;

  routRbac: string = "rbac";

  routList = routList;


  constructor(router: Router) {
    this.router = router;
  }

  ngOnInit() {
  }


  navTo(routUrl: string){
    this.router.navigateByUrl(routUrl);
  }

}

const routList = [
  {name: "HOME", rout: "home"},
  {name: "SAMPLES", rout: "ngsamples"},
  {name: "BINDING", rout: "databinding"},
  {name: "RBAC-LIVE", rout: "rbac"}
]