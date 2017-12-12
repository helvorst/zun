import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UrlYTParamsResolver implements Resolve<any>{

  constructor(private router: Router,
    private playerSrv: PlayerService,
    private ytSrv: YoutubeService) { }

  channel(channelId) {
    if (!this.playerSrv.currentChannel || this.playerSrv.currentChannel.id != channelId) {
      console.log('channel resolved');
      return this.ytSrv.getChannelById(channelId);
    } else {
      console.log('channel resolved cache');
      return Observable.of({ items: [this.playerSrv.currentChannel] });
    }
  }

  playlist(playlistId) {
    if (!this.playerSrv.currentPlaylist || this.playerSrv.currentPlaylist.id != playlistId) {
      console.log('playlist resolved');
      return this.ytSrv.getPlaylistById(playlistId);
    } else {
      console.log('playlist resolved cache');
      return Observable.of({ items: [this.playerSrv.currentPlaylist] });
    }
  }

  playlistItems(playlistId) {
    if (!this.playerSrv.currentPlaylistItems.length) {
      console.log('playlist items resolved');
      return this.ytSrv.getPlaylistItems(playlistId);
    } else {
      console.log('playlist items resolved cache');
      return Observable.of(this.playerSrv.currentPlaylistItems);
    }
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const channelId = route.params.channelId;
    const playlistId = route.params.playlistId;
    return this.channel(channelId) // #1 resolve channel
      .mergeMap(result => {
        this.playerSrv.currentChannel = result.items[0];
        return this.playlist(playlistId) // #2 resolve playlist
          .mergeMap(result => {
            this.playerSrv.currentPlaylist = result.items[0];
            return this.playlistItems(playlistId) // #3 resolve playlist videos
              .map(items => {
                this.playerSrv.currentPlaylistItems = items;
                this.playerSrv.currentVideo = this.playerSrv.currentPlaylistItems[0];
                return this.playerSrv.currentVideo;
              });
          });
      });
  }

}
