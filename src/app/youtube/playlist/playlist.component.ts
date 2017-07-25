import { Observable } from 'rxjs/Rx';
import { YoutubeService } from '../../service/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {

  public playlist: Observable<any>;
  constructor(private ytSrv: YoutubeService) { }

  ngOnInit() {
    this.playlist = this.ytSrv.getPlaylistItems();
   
  }

}
