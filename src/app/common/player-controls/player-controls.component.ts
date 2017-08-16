import { PlayerService } from '../../service/player/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.less']
})
export class PlayerControlsComponent implements OnInit {

  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
  }

  playStop(): void {
    this.playerSrv.playerState.isStopped ? this.playerSrv.player.play() : this.playerSrv.player.pause();
    this.playerSrv.setState('isStopped');
  }

  switchTo(step): void {
    this.playerSrv.switchTo(step);
  }

  setLoop(): void {
    this.playerSrv.setState('isLooped');
  }

  setShuffle(): void {
    this.playerSrv.setState('isShuffled');
  }
}
