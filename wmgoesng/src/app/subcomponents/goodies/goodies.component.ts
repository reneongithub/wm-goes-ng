import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/services/person.model';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-goodies',
  templateUrl: './goodies.component.html',
  styleUrls: ['./goodies.component.css']
})
export class GoodiesComponent implements OnInit {

  private personFormVisible: boolean;

  person: Person;

  constructor(private _bottomSheet: MatBottomSheet) {

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




  saveMember(): void
  {
    this.person.firstName = null;
    this.person.lastName = null;

    this.person.city = null;
    this.person.street = null;
    this.person.phone = null;

    this._bottomSheet.open(BottomSheetOverviewMemberSheet);
  }

}

@Component({
  selector: 'bottom-sheet-overview-goodie-sheet',
  templateUrl: 'bottom-sheet-overview-goodie-sheet.html',
})
export class BottomSheetOverviewMemberSheet {

  bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewMemberSheet>;

  constructor(bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewMemberSheet>) {

    this.bottomSheetRef = bottomSheetRef;
  }

}
