import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { PlayerService } from "../player/player.service";
import { YoutubeService } from "../youtube/youtube.service";

@Injectable()
export class IsPlaylistLoadedService implements Resolve<any>{

  constructor(private router: Router,
    private playerSrv: PlayerService,
    private ytSrv: YoutubeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const playlistId = route.paramMap.get('playlistId');

    if (!this.playerSrv.currentPlaylist) {
      this.ytSrv.getInfoOfPlaylist(playlistId)
      .subscribe(playlists => this.playerSrv.setPlaylist(playlists[0]))
    } else {
      this.playerSrv.setPlaylist(this.playerSrv.currentPlaylist);
    }
  }
}
