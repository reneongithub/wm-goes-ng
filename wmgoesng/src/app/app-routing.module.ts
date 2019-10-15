import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgoverviewComponent } from './subcomponents/ngoverview/ngoverview.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { RbacComponent } from './subcomponents/rbac/rbac.component';
import { NgSamplesComponent } from './subcomponents/ng-samples/ng-samples.component';
import { DatabindingComponent } from './subcomponents/databinding/databinding.component';
import { GoodiesComponent } from './subcomponents/goodies/goodies.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: NgoverviewComponent},
  {path: 'rbac', component: RbacComponent},
  {path: 'ngsamples', component: NgSamplesComponent},
  {path: 'databinding', component: DatabindingComponent},
  {path: 'goodies', component: GoodiesComponent},
  /* samplecode for sub routing */
  // {
  //   path: 'topcomp', 
  //   component: TopcompComponent,
  //   children: [
  //     {path: '', redirectTo: 'subcomp1', pathMatch: 'full'},
  //     {path: 'subcomp1', component: Subcomp1Component},
  //     {path: 'subcomp2', component: Subcomp2Component},
  //     {path: '**', component: Subcomp1Component},
  //   ]
  // },


  {path: '**', component: ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
