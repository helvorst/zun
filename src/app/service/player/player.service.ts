import { YoutubeService } from '../youtube/youtube.service';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class PlayerService {
  public currentPlaylistItems = [];
  public currentVideo;
  public currentVideoObservable = new Subject();
  public playerState = {
    isStopped: false,
    isLooped: false,
    isShuffled: false
  };

  constructor(private ytSrv: YoutubeService) {
    ytSrv.getPlaylistItems()
      .subscribe(playlistItems => {
        this.currentPlaylistItems = playlistItems;
        if (!this.currentVideo) {
          var random = this.getShuffledIndex();
          this.play(this.currentPlaylistItems[random]);
        }
      });
  }

  getCurrentVideoIndex(): number {
    return this.currentPlaylistItems.findIndex(video => video == this.currentVideo);
  }

  getShuffledIndex(): number {
    const size = this.currentPlaylistItems.length;
    const random = Math.ceil(Math.random()*size);
    return random;
  }

  play(video): void {
    this.currentVideo = video;
    this.currentVideoObservable.next(this.currentVideo);
  }

  switchTo(step?: number): void {
    let currentIndex = this.getCurrentVideoIndex();
    if (this.playerState.isLooped) {
      this.play(this.currentVideo);
    } else if (this.playerState.isShuffled) {
      const shuffledIndex = this.getShuffledIndex();
      this.play(this.currentPlaylistItems[shuffledIndex]);
    } else if (step != null) {
      const targetIndex = currentIndex + step;
      this.play(this.currentPlaylistItems[targetIndex]);
    }
  }

  setState(state): void {
    this.playerState[state] = !this.playerState[state];
  }

}
