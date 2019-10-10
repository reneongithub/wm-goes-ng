import { Injectable } from '@angular/core';

@Injectable()
export class RbacService {

  constructor() { }



  login(username: string, pass: string, cb: (result: any) => any)
  {
    // console.log("user: "+username+" - pass: "+pass);

    cb("logged in for -> user: "+username+" - pass: "+pass);
  }

}
