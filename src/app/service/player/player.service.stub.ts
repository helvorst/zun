
import { StateAst } from '@angular/animations/browser/src/dsl/animation_ast';
import { YoutubeServiceStub } from '../youtube/youtube.service.stub';
import { YoutubeService } from '../youtube/youtube.service';
import { Subject } from 'rxjs/Rx';
import { Observable } from "rxjs/Observable";


export class PlayerServiceStub {
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
 private ytSrv = new YoutubeServiceStub();
  //TODO get rid of
  public videoEnded = this.switchTo;

  constructor() {
    this.ytSrv.getPlaylistItems()
      .subscribe(playlistItems => {
        this.currentPlaylistItems = playlistItems;
        if (!this.currentVideo) {
          var random = this.getShuffledIndex();
          this.currentVideo = this.currentPlaylistItems[random];
        }
      });
  }

  getPlayer(element: any): Observable<any> {
    const player = {
      loadVideoById: jasmine.createSpy('loadVideoById').and.returnValue(true),
      state: {
        data: 0
      },
      playVideo: jasmine.createSpy('playVideo').and.returnValue('playing'),
      pauseVideo: jasmine.createSpy('pauseVideo').and.returnValue('stopped')
    };
    return Observable.of(player);
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

  play(videoId): void {
    // this.currentVideo = video;
    // this.currentVideoIndex = this.getVideoIndex(this.currentVideo);
    // this.currentVideoObservable.next(this.currentVideo);
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
