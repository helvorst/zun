import { Observable } from 'rxjs/Rx';
import { YoutubeService } from '../../service/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.less']
})
export class PlaylistComponent implements OnInit {

  public playlist =[];
  constructor(private ytSrv: YoutubeService) { }

  ngOnInit() {
     this.ytSrv.getPlaylistItems()
    .subscribe(res => {
      console.log(res)
      this.playlist.push(res)
    })
    
    
   
  }

}
