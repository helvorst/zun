import { Component, OnInit } from '@angular/core';
import { PlayerService } from "../../service/player/player.service";

@Component({
  selector: 'app-player-title',
  templateUrl: './player-title.component.html',
  styleUrls: ['./player-title.component.less']
})
export class PlayerTitleComponent implements OnInit {

  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
  }

}
