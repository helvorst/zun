import { PlayerService } from '../../service/player/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.less']
})
export class WatchComponent implements OnInit {

  constructor(
    private playerSrv: PlayerService,
    private route: ActivatedRoute) { }

  ngOnInit() {
   this.route.paramMap
    .subscribe((params: ParamMap) => {
     const playlistId = params.get('playlistId');
     this.playerSrv.setPlaylist(playlistId);
    });
  }

}
