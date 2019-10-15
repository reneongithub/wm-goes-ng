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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatNativeDateModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RbacService } from './services/rbac.service';
import { HttpClientModule } from '@angular/common/http';
import { PersonformComponent } from './personform/personform.component';
import { GoodiesComponent } from './subcomponents/goodies/goodies.component';



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
    NavigationComponent,
    PersonformComponent,
    GoodiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    RbacService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
