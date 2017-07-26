import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Component, OnInit } from '@angular/core';
declare var YT;
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit {
  public player;
  private video;

  constructor(
    private ytSrv: YoutubeService,
    private playerSrv: PlayerService) { }

  ngOnInit() {
    this.initPlayer();

    this.playerSrv.currentVideoObservable
      .subscribe(video => this.select(video));
  }

  initPlayer(): void {
    this.player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      suggestedQuality: 'large',
      fs: 0,
      modestbranding: 1,
      playsinline: 1,
      controls: 0,
      enablejsapi: 1,
      events: {
        onError: this.onPlayerError,
        onStateChange: this.onPlayerStateChanged
      }
    });
  }

  onPlayerError(er): void {
    console.log(er)
  }

  onPlayerStateChanged(state): void {
    //video ended
    if(state.date === 0){
      this.playerSrv.switchTo();
    }
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
