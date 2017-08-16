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
  private history = [];
  public playerState = {
    isStopped: false,
    isLooped: false,
    isShuffled: true
  };
  public player;

  //TODO get rid of
  public videoEnded = this.switchTo;

  constructor(private ytSrv: YoutubeService) {
    ytSrv.getChannelByName('helvorst')
      .subscribe(channels => {
        this.setChannel(channels[0]);
      });
  }

  setChannel(channel) {
    this.currentChannelPlaylists = [];
    this.currentPlaylistItems = [];
    this.currentChannel = channel;

    this.ytSrv.getChannelPlaylists(this.currentChannel.snippet.channelId || this.currentChannel.id)
      .subscribe(playlists => {
        this.currentChannelPlaylists = playlists;
        this.currentPlaylist = playlists[0];
        this.ytSrv.getPlaylistItems(this.currentPlaylist.id)
          .subscribe(playlistItems => {
            this.currentPlaylistItems = playlistItems;
            if (!this.currentVideo) {
              var random = this.getShuffledIndex();
              this.play(this.currentPlaylistItems[random]);
            }
          });
      })
  }

  updatePlaylistItems(): void {
    this.ytSrv.getPlaylistItems(this.currentPlaylist.id)
      .subscribe(playlistItems => {
        this.currentPlaylistItems = playlistItems;
        if (!this.currentVideo) {
          var random = this.getShuffledIndex();
          this.play(this.currentPlaylistItems[random]);
        }
      });
  }

  getPlayer(element: any): void {
    this.player = new YTPlayer(element, {
      height: '350',
      width: '600',
      autoplay: true,
      suggestedQuality: 'large',
      fs: 0,
      modestbranding: 1,
      enablejsapi: 1,
    });
    this.player.on('ended', () => {
      this.switchTo(1);
    })
    this.player.on('unplayable', (videoId) => {
      this.switchTo(1);
    })
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
    if (this.player)
      this.player.load(video.contentDetails.videoId);
  }

  switchTo(step?: number): void {
    let targetVideo;
    if (this.playerState.isLooped && !step) {
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
