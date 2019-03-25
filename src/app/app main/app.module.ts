import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

//Imports voor forms
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,MatInputModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//Imports voor app
import { AppComponent } from './app.component';
import { LoginComponent } from '../view components/login/login.component';
import {NavigationComponent } from '../view components/navigation/navigation.component';
import {JurgenComponent } from '../view components/members/jurgen/jurgen.component';
import {KaranComponent } from '../view components/members/karan/karan.component';
import {TareqComponent } from '../view components/members/tareq/tareq.component';
import {TeamCComponent } from '../view components/members/team-c/team-c.component';
import {ZinaComponent } from '../view components/members/zina/zina.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    JurgenComponent,
    KaranComponent,
    TareqComponent,
    ZinaComponent,
    TeamCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
