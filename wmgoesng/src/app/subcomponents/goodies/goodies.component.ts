import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/services/person.model';

@Component({
  selector: 'app-goodies',
  templateUrl: './goodies.component.html',
  styleUrls: ['./goodies.component.css']
})
export class GoodiesComponent implements OnInit {

  private personFormVisible: boolean;

  person: Person;

  constructor() {

    this.personFormVisible = false;

    this.initPerson();
  
  }
  
  initPerson(){

    this.person = new Person();
  }

  ngOnInit() {

    /* do some init stuff */
  }

  public toggleForm(){
    this.personFormVisible = !this.personFormVisible;
  }

}
