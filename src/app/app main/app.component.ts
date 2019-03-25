import { Component, OnInit } from '@angular/core';
import { DirectiveAst } from '@angular/compiler';

class Views{
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  currentDialog="login";
  showMainView = false;
  currentView = "";

  ngOnInit() {
    
  }

  setView(view) {
    this.currentView = view;
  }

  setDialog(dialog){
    this.currentDialog = dialog;
  }
}
