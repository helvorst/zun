import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
import { Router, NavigationEnd } from '@angular/router';
//declare var YT;

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
    private playerSrv: PlayerService,
    private router: Router
  ) {
    

    this.router.events
      .filter(e => e instanceof NavigationEnd)
      .subscribe((e: NavigationEnd) => {
        const urlParams = e.urlAfterRedirects.split('/');
        if(urlParams[1]=='watch'){
          const videoId = urlParams[urlParams.length-1];
          this.playerSrv.play(videoId);
        }
      });
  }

  ngOnInit() {
    this.playerSrv.getPlayer('#ytplayer');
    this.playerSrv.play(this.playerSrv.currentVideo.id);
  }

}
