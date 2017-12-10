import { YoutubeService } from '../youtube/youtube.service';
import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
declare var YT;
import * as YTPlayer from 'yt-player';


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

  constructor(private ytSrv: YoutubeService) {

  }

  getDefaultChannel(): Observable<any> {
    return this.ytSrv.getChannelByName('helvorst')
      .flatMap(defaultChannels => {
        return this.setChannel(defaultChannels[0]);
      });
  }

  getPresetChannel(playlistId): Observable<any> {
    return this.ytSrv.getInfoOfPlaylist(playlistId)
      .flatMap(foundPlaylists => {
        this.currentPlaylist = foundPlaylists[0];
        const targetChannelId = this.currentPlaylist.snippet.channelId;
        const targetchannelTitle = this.currentPlaylist.snippet.channelTitle;
        return this.ytSrv.getChannelByName(targetchannelTitle)
        .flatMap(channels => {
          return this.setChannel(channels[0]);
        })
      });
  }


  setChannel(channel) {
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
          }
          ready.next(true);
        })
    } else {
      setTimeout(() => ready.next(true), 100);
    }
    return ready;
  }

  setPlaylist(playlist): void {
    if (!this.currentPlaylistItems.length || this.currentPlaylist.id != playlist.id) {
      this.currentPlaylist = playlist;
      this.ytSrv.getPlaylistItems(playlist.id)
        .subscribe(playlistItems => {
          this.currentPlaylistItems = playlistItems;
          var random = this.getShuffledIndex();
          this.play(this.currentPlaylistItems[random]);
        });
    } else {
      setTimeout(() => this.play(this.currentVideo), 500);
    }
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
      this.switchTo(1);
    })
  }

  getVideoIndex(targetVideo): number {
    return this.currentPlaylistItems.findIndex(video => video == targetVideo);
  }

  getShuffledIndex(): number {
    const size = this.currentPlaylistItems.length-1;
    const random = Math.ceil(Math.random() * size);
    return random;
  }

  play(video): void {
    this.currentVideo = video;
    this.currentVideoIndex = this.getVideoIndex(this.currentVideo);
    this.currentVideoObservable.next(this.currentVideo);
    if (this.player) {
      this.player.load(video.contentDetails.videoId);
      if(!this.history[this.history.length - 1] || this.history[this.history.length - 1].what!=video) {
        this.history.push({what: video, when: new Date});
      }
    }
  }

  switchTo(step?: number): void {
    let targetVideo; 
    let shuffledIndex = 0;
    if (this.playerState.isLooped && step===100) { //100 - on('ended') fired
      targetVideo = this.currentVideo;
    } else if (this.playerState.isShuffled) {   
      if (step == 1) {
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
    this.play(targetVideo);
  }

  setState(state): void {
    this.playerState[state] = !this.playerState[state];
  }

}
