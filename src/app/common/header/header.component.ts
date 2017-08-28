import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { PlayerService } from "../../service/player/player.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  @Input() sidenavControl;
  private isPlaying: boolean;
  
  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
     this.playerSrv.currentVideoObservable
     .subscribe(newvideo => { this.isPlaying = true;})
  }

  logoControl(): void {
    this.sidenavControl.toggle();
  }

}
