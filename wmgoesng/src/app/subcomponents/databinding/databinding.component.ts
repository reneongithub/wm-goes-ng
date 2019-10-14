import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/services/person.model';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  person: Person;

  constructor() {

    this.initPerson();

  }

  initPerson(){

    this.person = new Person();
  }

  ngOnInit() {
  }

}
