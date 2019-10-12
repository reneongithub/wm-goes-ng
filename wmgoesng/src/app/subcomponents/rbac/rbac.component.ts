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

  loginRsp: Result;


  constructor(serv: RbacService) {

    this.serv = serv;

  }

  

  ngOnInit() {

    this.userName = "";
    this.password = "";
    this.token = null;

    this.rspMsg = "no token available";



  }

  login(){
    this.serv.login( this.userName , this.password, (result: Result) => this.onLogin(result) );
  }


  onLogin(result: Result){

    this.loginRsp = result;

    console.log(result);

    if(result.hasError){
      this.rspMsg = "login failed"
      return;
    };

    let obj: any = result.object;

    this.rspMsg = obj['token'];


  }

}
