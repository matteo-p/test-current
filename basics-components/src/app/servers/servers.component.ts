import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

allowNew = false;
username ='dummy';
serverID = '0' ;
servers = ['sName1','sName2'];

  constructor() { 

    setInterval(() => {
      this.allowNew=true
    },2000)
  }

  ngOnInit() {
  }

  createS() {
    this.allowNew=false;
    this.servers.push(this.serverID);
  };
  
  resetName(){
    this.username='';
  }

  theColor(){
    if (this.username) {
      return '#afa';}
      else {
        return '#faa';
      }

    }
  

}
