import { YoutubeService } from '../youtube/youtube.service';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
declare var YT;

@Injectable()
export class PlayerService {
  public currentPlaylistItems = [];
  public currentVideo;
  public currentVideoIndex;
  public currentVideoObservable = new Subject();
  private history = [];
  public playerState = {
    isStopped: false,
    isLooped: false,
    isShuffled: true
  };

  //TODO get rid of
  public videoEnded = this.switchTo;

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

  getPlayer(element: any): Observable<any> {
      const player = {
      loadVideoById: () => {},
      state: {
        data: 0
      },
      playVideo: () => {},
      pauseVideo: () => {}
    };
    return Observable.of(player);
    // let playerObservable = new Subject();
    // this.initPlayer(playerObservable, element);
    // return playerObservable;
  }

  waitForPlayerReady(playerObservable: Subject<any>, player: any): void {
    if(player.B){
      playerObservable.next(player);
    } else {
      setTimeout(()=> this.waitForPlayerReady(playerObservable, player), 100);
    }
  }
  
  initPlayer(playerObservable: Subject<any>, element: any): any {
   
    // if (YT && YT.loaded == 1 && this.currentVideo) {
    //   const player = new YT.Player(element, {
    //     height: '350',
    //     width: '600',
    //     suggestedQuality: 'large',
    //     fs: 0,
    //     modestbranding: 1,
    //     playsinline: 1,
    //     controls: 0,
    //     enablejsapi: 1,
    //     events: {
    //       onError: this.onPlayerError,
    //       onStateChange: this.onPlayerStateChanged
    //     }
    //   }) 
    //   this.waitForPlayerReady(playerObservable, player);
    // } else {
    //   setTimeout(() => this.initPlayer(playerObservable, element), 100);
    // }
  }

  onPlayerError = (er) => {
    console.log(er)
    this.videoEnded(1);
  }

  onPlayerStateChanged = (state) => {
    //video ended
    if (state.data === 0) {
      this.videoEnded(1);
    }
  }

  getVideoIndex(targetVideo): number {
    return this.currentPlaylistItems.findIndex(video => video == targetVideo);
  }

  getShuffledIndex(): number {
    const size = this.currentPlaylistItems.length;
    const random = Math.ceil(Math.random() * size);
    return random;
  }

  play(video): void {
    this.currentVideo = video;
    this.currentVideoIndex = this.getVideoIndex(this.currentVideo);
    this.currentVideoObservable.next(this.currentVideo);
  }

  switchTo(step?: number): void {
    let targetVideo;
    if (this.playerState.isLooped && !step){
      targetVideo = this.currentVideo;
    } else if (this.playerState.isShuffled) {
      let shuffledIndex = 0;
      if (step == 1) {
        shuffledIndex = this.getShuffledIndex();
      } else if (step == -1) {
        this.history.pop();
        shuffledIndex = this.history.pop();
      }
      targetVideo = this.currentPlaylistItems[shuffledIndex];
      this.history.push(shuffledIndex);
    } else if (step != null) {
      const currentIndex = this.getVideoIndex(this.currentVideo);
      const nextIndex = currentIndex + step;
      targetVideo = this.currentPlaylistItems[nextIndex];
      if (step == 1) {
        this.history.push(nextIndex)
      }
    }
    this.play(targetVideo);
  }

  setState(state): void {
    this.playerState[state] = !this.playerState[state];
  }

}
