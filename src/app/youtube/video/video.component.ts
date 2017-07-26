import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {

  @Input() video: any;
  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
  }

  play(): void {
    this.playerSrv.play(this.video);
  }

}
