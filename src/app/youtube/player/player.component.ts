import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Component, OnInit, ViewChild } from '@angular/core';
declare var YT;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  public player;
  private video;

  @ViewChild('ytplayer') htmlPlayerElement;

  constructor(
    private ytSrv: YoutubeService,
    private playerSrv: PlayerService) { }
   

  ngOnInit() {
     
    this.playerSrv.getPlayer(this.htmlPlayerElement.nativeElement)
    .subscribe(player  => {
      this.player = player;
      this.playerSrv.switchTo(1);
    })

    this.playerSrv.currentVideoObservable
      .subscribe(video => this.select(video));

  }

  select(video): void {
    this.video = video;
    this.player.loadVideoById({
      videoId: video.contentDetails.videoId
    });
  }

  playStop(): void {
    this.playerSrv.playerState.isStopped ? this.player.playVideo() : this.player.pauseVideo();
    this.playerSrv.setState('isStopped');
  }

  switchTo(step): void {
    this.playerSrv.switchTo(step);
  }

  setLoop(): void {
    this.playerSrv.setState('isLooped');
  }

  setShuffle(): void {
    this.playerSrv.setState('isShuffled');
  }

}
