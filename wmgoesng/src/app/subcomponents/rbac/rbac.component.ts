import { Component, OnInit } from '@angular/core';
import { RbacService } from 'src/app/services/rbac.service';

@Component({
  selector: 'app-rbac',
  templateUrl: './rbac.component.html',
  styleUrls: ['./rbac.component.css']
})
export class RbacComponent implements OnInit {

  slogan: string;
  serv: RbacService;

  userName: string;
  password: string;


  constructor(serv: RbacService) {

    this.serv = serv;
    console.log(serv);

    this.slogan = "rbac works";

  }

  

  ngOnInit() {
    // test service
    this.serv.login( "user" , "pass", (result: any) => this.onLogin(result) );
  }


  onLogin(result: any){
    console.log(result);
  }

}
