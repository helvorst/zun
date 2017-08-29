import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from "@angular/router";
import { PlayerService } from "../player/player.service";
import { YoutubeService } from "../youtube/youtube.service";
import { Observable } from "rxjs/Rx";

@Injectable()
export class IsWatchValidService implements CanActivate {

  constructor(private router: Router,
    private playerSrv: PlayerService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params.playlistId) {
        return true;
    } else {
      this.playerSrv.getDefaultChannel()
        .subscribe(() => {
          this.router.navigate(['/watch', this.playerSrv.currentPlaylist.id]);
        })
    }
  }
  
}
