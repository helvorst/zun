import { YoutubeService } from '../youtube/youtube.service';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
declare var YT;
import * as YTPlayer from 'yt-player';
import { Router } from '@angular/router';



@Injectable()
export class PlayerService {
  public currentChannel;
  public currentChannelPlaylists;
  public currentPlaylist;
  public currentPlaylistItems = [];
  public currentVideo;
  public currentVideoIndex;
  public currentVideoObservable = new Subject();
  public history = [];
  public playerState = {
    isStopped: false,
    isLooped: false,
    isShuffled: true
  };
  public player;

  //TODO get rid of
  public videoEnded = this.switchTo;

  constructor(
    private ytSrv: YoutubeService,
    private router: Router) { }

  getDefaultChannel(): Observable<any> {
    return this.ytSrv.getChannelByName('helvorst');
  }

  setChannel(channel): Subject<boolean> {
    this.history = [];
    const ready = new Subject<boolean>();
    if (!this.currentChannel || this.currentChannel.id != channel.id) {
      this.currentChannelPlaylists = [];
      this.currentPlaylistItems = [];
      this.currentChannel = channel;

      this.ytSrv.getChannelPlaylists(this.currentChannel.id)
        .subscribe(playlists => {
          this.currentChannelPlaylists = playlists;
          if (!this.currentPlaylist) {
            this.currentPlaylist = playlists[0];
            const videoIndex = this.getShuffledIndex();
            this.currentVideo = this.currentPlaylist[videoIndex];
          }
          ready.next(true);
        })
    } else {
      ready.next(true);
    }
    return ready;
  }

  setPlaylist(playlist): Subject<boolean> {
    this.history = [];
    const ready = new Subject<boolean>();
    if (!this.currentPlaylistItems.length || this.currentPlaylist.id != playlist.id) {
      this.currentPlaylist = playlist;
      this.ytSrv.getPlaylistItems(playlist.id)
        .subscribe(playlistItems => {
          this.currentPlaylistItems = playlistItems;
          this.currentVideo = this.currentPlaylistItems[0];
          ready.next(true);
        });
    } else {
      ready.next();
    }
    return ready;
  }

  getPlayer(element: any): void {
    this.player = new YTPlayer(element, {
      height: '300',
      width: '300',
      autoplay: true,
      suggestedQuality: 'large',
      fs: 0,
      modestbranding: 1,
      enablejsapi: 1,
    });
    this.player.on('ended', () => {
      this.switchTo(100);
    })
    this.player.on('unplayable', (videoId) => {
      this.switchTo(100);
    })
    //`player.on('unplayable', (videoId) => {})`
  }

  getVideoIndex(targetVideo): number {
    return this.currentPlaylistItems.findIndex(video => video == targetVideo);
  }

  getShuffledIndex(): number {
    const size = this.currentPlaylistItems.length - 1;
    const random = Math.ceil(Math.random() * size);
    return random;
  }

  play(videoId): void {
    const foundVideos = this.currentPlaylistItems.filter(video => video.id === videoId);
    this.currentVideo = foundVideos[0];
    this.currentVideoIndex = this.getVideoIndex(this.currentVideo);
    if (this.player) {
      this.player.load(videoId);
      if (!this.history[this.history.length - 1] || this.history[this.history.length - 1].what != this.currentVideo) {
        this.history.push({ what: this.currentVideo, when: new Date });
      }
    }
    this.currentVideoObservable.next(this.currentVideo);
  }

  switchTo(step?: number): void {
    let targetVideo;
    let shuffledIndex = 0;
    if (this.playerState.isLooped && step === 100) { //100 - on('ended') fired
      targetVideo = this.currentVideo;
    } else if (this.playerState.isShuffled) {
      if (step > 0) {
        shuffledIndex = this.getShuffledIndex();
        targetVideo = this.currentPlaylistItems[shuffledIndex];
      } else if (step == -1) {
        const currentIndex = this.history.pop(); // pop oiut the current
        targetVideo = this.history[this.history.length - 1].what;
      }
    } else if (step != null) {
      const currentIndex = this.getVideoIndex(this.currentVideo);
      const nextIndex = currentIndex + step;
      targetVideo = this.currentPlaylistItems[nextIndex];
    }
    this.url(targetVideo.id);
  }

  url(videoId) {
    this.router.navigate(['/watch',
    this.currentChannel.id,
    this.currentPlaylist.id,
    videoId]);
  }

  setState(state): void {
    this.playerState[state] = !this.playerState[state];
  }

}
