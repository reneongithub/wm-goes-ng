import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../services/person.model';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material';

@Component({
  selector: 'app-personform',
  templateUrl: './personform.component.html',
  styleUrls: ['./personform.component.css']
})
export class PersonformComponent implements OnInit {

  @Input('person')person: Person;

  @Input('saveBtnVisible')saveBtnVisible: boolean;

  constructor(private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    // console.log(this.person);
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  savePerson(): void
  {
    this.person.firstName = null;
    this.person.lastName = null;

    this.person.city = null;
    this.person.street = null;
    this.person.phone = null;

    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {

  bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>;

  constructor(bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {

    this.bottomSheetRef = bottomSheetRef;
  }

}