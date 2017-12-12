import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';

@Injectable()
export class WatchValidGuard implements CanActivate {

  constructor(private router: Router,
    private playerSrv: PlayerService,
    private ytSrv: YoutubeService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.params.channelId && route.params.playlistId && route.params.videoId) {
      console.log('WatchValidGuard: pass')
      return true;
    } else {
      console.log('WatchValidGuard: fetched default helvorst channel');
      let channelId, playlistId, videoId;
      return this.playerSrv.getDefaultChannel() //gets helvorst channel 
        .mergeMap(channels => {
          this.playerSrv.currentChannel = channels[0];
          channelId = this.playerSrv.currentChannel.id;
          return this.ytSrv.getChannelPlaylists(channelId)
            .mergeMap(playlists => {
              this.playerSrv.currentPlaylist = playlists[0];
              playlistId = this.playerSrv.currentPlaylist.id;
              return this.ytSrv.getPlaylistItems(playlistId)
              .map(videos=> {
                this.playerSrv.currentVideo = videos[0];
                videoId = this.playerSrv.currentVideo.id;
                this.router.navigate(['/watch', channelId, playlistId, videoId]);
                return false;
              })
            })
        })
    }
  }

}
