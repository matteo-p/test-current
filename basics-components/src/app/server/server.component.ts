import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
rndStatus: number = Math.random();

serverStatus= this.rndStatus < 0.5 ? 'offline': 'online';
serverID: number =Math.trunc(this.rndStatus*10);
getStatus(){
  return this.serverStatus;
}

}

