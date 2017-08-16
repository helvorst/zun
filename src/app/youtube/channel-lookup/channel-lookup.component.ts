import { PlayerService } from '../../service/player/player.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs/Rx';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-channel-lookup',
  templateUrl: './channel-lookup.component.html',
  styleUrls: ['./channel-lookup.component.less']
})
export class ChannelLookupComponent implements OnInit {

  channels;
  playlists;
  term = new FormControl();
  startSearch = false;

  constructor(
    private ytSrv: YoutubeService,
    private playerSrv: PlayerService) { }

  ngOnInit() {
    this.channels = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(value => {
        return value.length ? this.ytSrv.searchChannel(value) : Observable.from([])
      })
  }

  setChannel(channel): void {
    //this.term.value = channel.snippet.title;
    this.startSearch = false;
    this.playerSrv.setChannel(channel);
  }

}
