import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminTheatrePanel',
  styles: [':host /deep/ .mat-sidenav-content {padding: 0;} .mat-sidenav-container {z-index: 1000}'],
  templateUrl: './adminTheatrePanel.component.html',
})
export class AdminTheatreLayoutPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
