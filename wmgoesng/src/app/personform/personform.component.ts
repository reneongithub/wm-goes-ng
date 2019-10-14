import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../services/person.model';

@Component({
  selector: 'app-personform',
  templateUrl: './personform.component.html',
  styleUrls: ['./personform.component.css']
})
export class PersonformComponent implements OnInit {

  @Input('person')person: Person;

  constructor() { }

  ngOnInit() {
    console.log(this.person);
  }

}
