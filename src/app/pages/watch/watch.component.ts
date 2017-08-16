import { PlayerService } from '../../service/player/player.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.less']
})
export class WatchComponent implements OnInit {

  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
    this.playerSrv.updatePlaylistItems();
  }

}
