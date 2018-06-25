import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-app',
  templateUrl: './result-app.component.html',
  styleUrls: ['./result-app.component.css']
})
export class ResultAppComponent implements OnInit {

  d = new Date();
  theDate: string;
  matchesData: object;

  constructor() { }

  public sampleMethodCall() {
    setInterval(function() {
      this.ngOnInit(); }, 4000);
    }

  ngOnInit() {
    fetch('https://worldcup.sfg.io/matches/today')
    .then(response => response.json())
    .then(data => {
      // Here's a list of repos!
      console.log(data);
      this.theDate = (this.d.getDate() + ' / ' + this.d.getMonth() + ' / ' + this.d.getFullYear());
      this.matchesData = data;
    });
    this.update();
  }

  update() {
    setInterval(() => {
      fetch('https://worldcup.sfg.io/matches/today')
    .then(response => response.json())
    .then(data => {
      // Here's a list of repos!
      console.log(data);
      this.matchesData = data;
    });
    }, 60000);
  }


}
