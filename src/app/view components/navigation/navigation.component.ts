import { Component, OnInit } from '@angular/core';
import {AppComponent } from '../../app main/app.component'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  currentView;

  constructor(private app : AppComponent) { }

  ngOnInit() {

  }

  navigate(view : string) :void {
    this.app.setDialog(view);
    this.app.setView(view);
  }
}
