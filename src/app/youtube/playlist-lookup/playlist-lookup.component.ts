import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-lookup',
  templateUrl: './playlist-lookup.component.html',
  styleUrls: ['./playlist-lookup.component.less']
})
export class PlaylistLookupComponent implements OnInit {

  playlists;
  constructor(
    private playerSrv: PlayerService,
    private ytService: YoutubeService) { }

  ngOnInit() {

  }

  setPlaylist(playlist): void {
    this.playerSrv.currentPlaylist = playlist;
    this.playerSrv.setPlaylist(playlist)
      .subscribe(items => {
        this.playerSrv.url(this.playerSrv.currentVideo.id);
      });
  }
}
