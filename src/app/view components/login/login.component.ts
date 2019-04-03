import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app main/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private app: AppComponent) { }
  
  ngOnInit() {

  }

  login(){
    this.app.setView("home");
    this.app.setDialog("home");
    this.app.showMainView = true;
  }
}