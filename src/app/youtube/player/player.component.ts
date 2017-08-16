import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";
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

    // Observable.zip(
    //   this.playerSrv.getPlayer(this.htmlPlayerElement.nativeElement),
    //   this.playerSrv.currentVideoObservable.take(1),
    //   (player, video) => [player, video]
    // )
    // .subscribe(values => {
    //   this.player = values[0];
    //   this.select(values[1]);
    // })

    this.playerSrv.getPlayer('#ytplayer');
    // if (this.playerSrv.player) {
    //   this.playerSrv.switchTo(1);
    // }
  }

}
