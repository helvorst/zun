import { PlayerService } from '../../service/player/player.service';
import { Observable } from 'rxjs/Rx';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {

  public playlist;
  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
     //this.playlist = this.ytSrv.getPlaylistItems();    
  }

}
