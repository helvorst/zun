import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { PlayerService } from "../player/player.service";

@Injectable()
export class IsChannelLoadedService implements Resolve<any>{

  constructor(private router: Router,
    private playerSrv: PlayerService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const playlistId = route.paramMap.get('playlistId');
    if (!this.playerSrv.currentChannel) {
      this.playerSrv.getPresetChannel(playlistId)
        .subscribe(() => {
          return true;
        })
    }
  }

}
