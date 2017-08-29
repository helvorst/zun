import { Router } from '@angular/router';
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
    private router: Router) { }

  ngOnInit() {
    
  }

   setPlaylist(playlist): void {
    this.playerSrv.setPlaylist(playlist);
    this.router.navigate(['/watch', 
    //this.playerSrv.currentChannel.id, 
    playlist.id]);
  }
}
