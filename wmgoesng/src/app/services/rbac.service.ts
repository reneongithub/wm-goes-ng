import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Result } from './service.result.model';

@Injectable()
export class RbacService {

  private rbacServHostUrl: string = "http://ivy5dev.lsb-sachsen-anhalt.de:8182";
  // private rbacServHostUrl: string = "http://localhost:8182";
  private rbacServLoginResource: string = "activity/login";

  private httpServ: HttpClient;

  constructor(httpServ: HttpClient) {
    this.httpServ = httpServ;
  }



  login(username: string, pass: string, cb: (result: Result) => any)
  {
    let tmpReqUrl: string = this.rbacServHostUrl+"/"+this.rbacServLoginResource;
    tmpReqUrl += "?namemail="+username;
    tmpReqUrl += "&pass="+pass;

    // console.log(tmpReqUrl);


    this.httpServ.get(tmpReqUrl).subscribe( (rsp?) => {

      if(rsp['hasErrors'] === undefined){
        cb(new Result(true, new Array("request failed"), null));
        return;
      }

      cb( new Result(rsp['hasErrors'], rsp['errors'], rsp['object']) );

    } );

  }

}
