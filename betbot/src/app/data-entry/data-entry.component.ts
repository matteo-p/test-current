import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  theX = 0;
  theY = 0;
  expected = {
    x : 0,
    y : 0
  };
  uno = {
    r : 0,
    val : 0,
    x : 0,
    y : 0
  };
  ics = {
    r : 0,
    val : 0,
    x : 0,
    y : 0
  };
  due = {
    r : 0,
    val : 0,
    x : 0,
    y : 0
  };
  uo = {
    und : {
      r05 : 0
    },
    over : {
      r05 : 0
    }
  };



  constructor() { }

  ngOnInit() {
  }

  process() {
    this.ics.r = this.ics.val > 0 ? 1 / this.ics.val : 0;
    this.ics.x = 0; // sin 90
    this.ics.y = this.ics.r ; // cos 90
    this.ics.y = Math.round((this.ics.y) * 100) / 100;

    this.uno.r = this.uno.val > 0 ? 1 / this.uno.val : 0;
    this.uno.y = this.uno.r * -0.5; // sin 210
    this.uno.x = this.uno.r * - Math.sqrt(3) / 2; // cos 210
    // this.uno.y = Math.round((this.uno.y) * 100) / 100;
    // this.uno.x = Math.round((this.uno.x) * 100) / 100;

    this.due.r = this.due.val > 0 ? 1 / this.due.val : 0;
    this.due.y = this.due.r * -0.5; // sin 210
    this.due.x = this.due.r * Math.sqrt(3) / 2; // cos 210
    // this.due.y = Math.round((this.due.y) * 100) / 100;
    // this.due.x = Math.round((this.due.x) * 100) / 100;

    this.expected.x = this.uno.x + this.ics.x + this.due.x;
    this.expected.y = this.uno.y + this.ics.y + this.due.y;
    this.expected.x = Math.round((this.expected.x) * 100) / 100;
    this.expected.y = Math.round((this.expected.y) * 100) / 100;
  }

  theBottom() {
    this.theY = (this.expected.y * 100) + 146;
    return this.theY + 'px';
  }

  theLeft() {
    this.theX = (this.expected.x * 100) + 146;
    return this.theX + 'px';
  }
}
