import { YoutubeService } from '../../service/youtube.service';
import { Component, OnInit } from '@angular/core';
declare var YT;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  public player;
  constructor(private ytSrv: YoutubeService) { }

  ngOnInit() {

    this.ytSrv.getVideo()
    .subscribe(video => this.play(video));

    this.player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      videoId: 'cKcERaGlg-o'
    });
  }

  play(video) {
    this.player.loadVideoById({
               'videoId': video.contentDetails.videoId,
               'suggestedQuality': 'large'});
  }
}
