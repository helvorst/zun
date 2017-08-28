import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { PlayerService } from "../player/player.service";
import { YoutubeService } from "../youtube/youtube.service";

@Injectable()
export class IsWatchValidService implements CanActivate {

  constructor(private router: Router,
    private playerSrv: PlayerService,
    private ytSrv: YoutubeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params.playlistId) {
      if (!this.playerSrv.currentChannel) {
        this.playerSrv.getPresetChannel(route.params.playlistId)
          .subscribe(() => {
            return true;
          })
      } else {
        return true;
      }

    } else {
      this.playerSrv.getDefaultChannel()
        .subscribe(() => {
          this.router.navigate(['/watch', this.playerSrv.currentPlaylist.id]);
        })
    }
  }

}
