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
  elementClicked: any;

  constructor() { }


  ngOnInit() {
    fetch('https://worldcup.sfg.io/matches/today')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.theDate = (this.d.getDate() + ' / ' + this.d.getMonth() + ' / ' + this.d.getFullYear());
      this.matchesData = data;

     Object.values(this.matchesData).forEach( (element) => {
        element.datetime = new Date(element.datetime);
        element.datetime = element.datetime.getHours();
      });
    });
    this.update();
  }

 /*  ngOnInit() {
    fetch('../../assets/scores.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.theDate = (this.d.getDate() + ' / ' + this.d.getMonth() + ' / ' + this.d.getFullYear());
      this.matchesData = data;

     Object.values(this.matchesData).forEach( (element) => {
        element.datetime = new Date(element.datetime);
        element.datetime = element.datetime.getHours();
      });
    });
    //this.update();
  } */

  update() {
    setInterval(() => {
      fetch('https://worldcup.sfg.io/matches/today')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.matchesData = data;
      Object.values(this.matchesData).forEach( (element) => {
        element.datetime = new Date(element.datetime);
        element.datetime = element.datetime.getHours();
      });
    });
    }, 60000);
  }

  toggleEvents() {
    this.elementClicked = event.currentTarget;
    this.elementClicked.classList.toggle('show-text');
    this.elementClicked = this.elementClicked.nextElementSibling;
    this.elementClicked.classList.toggle('he0');
    this.elementClicked.nextElementSibling.classList.toggle('he0');
  }


}
