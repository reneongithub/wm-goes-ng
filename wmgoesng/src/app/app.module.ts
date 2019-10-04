import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgoverviewComponent } from './subcomponents/ngoverview/ngoverview.component';
import { RbacComponent } from './subcomponents/rbac/rbac.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgSamplesComponent } from './subcomponents/ng-samples/ng-samples.component';
import { DatabindingComponent } from './subcomponents/databinding/databinding.component';

@NgModule({
  declarations: [
    AppComponent,
    NgoverviewComponent,
    RbacComponent,
    ErrorpageComponent,
    NgSamplesComponent,
    DatabindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
