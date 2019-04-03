import { NgModule } from '@angular/core';

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
import {OverOnsComponent } from '../view components/members/OverOns/OverOns.component';
import { TipsAndTricksComponent } from '../view components/members/Tips-and-tricks/Tips-and-tricks.component';
import {TareqComponent } from '../view components/members/tareq/tareq.component';
import {HomeComponent } from '../view components/members/home/home.component';
import {ZinaComponent } from '../view components/members/zina/zina.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    OverOnsComponent,
    TipsAndTricksComponent,
    TareqComponent,
    ZinaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
