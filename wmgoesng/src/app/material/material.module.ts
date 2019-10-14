import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatBottomSheetModule
} from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { BottomSheetOverviewExampleSheet } from '../personform/personform.component';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
  MatSidenavModule,
  FormsModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatExpansionModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatRadioModule,
  MatOptionModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatBottomSheetModule
];

@NgModule({
  declarations: [
    BottomSheetOverviewExampleSheet
  ],
  entryComponents: [
    BottomSheetOverviewExampleSheet
  ],
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
