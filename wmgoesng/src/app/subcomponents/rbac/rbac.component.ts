import { Component, OnInit } from '@angular/core';
import { RbacService } from 'src/app/services/rbac.service';
import { Result } from 'src/app/services/service.result.model';

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
  token: string;

  rspMsg: string;


  constructor(serv: RbacService) {

    this.serv = serv;
    console.log(serv);

  }

  

  ngOnInit() {

    this.userName = "";
    this.password = "";
    this.token = null;

    this.rspMsg = "no token available";

  }

  login(){
    this.serv.login( this.userName , this.password, (result: any) => this.onLogin(result) );
  }


  onLogin(result: any){
    this.rspMsg = "login failed";
    console.log(result);
  }

}
