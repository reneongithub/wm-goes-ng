import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgoverviewComponent } from './subcomponents/ngoverview/ngoverview.component';
import { RbacComponent } from './subcomponents/rbac/rbac.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NgSamplesComponent } from './subcomponents/ng-samples/ng-samples.component';
import { DatabindingComponent } from './subcomponents/databinding/databinding.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NgoverviewComponent,
    RbacComponent,
    ErrorpageComponent,
    NgSamplesComponent,
    DatabindingComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent
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
