import { PlayerService } from '../../service/player/player.service';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {

  @Input() video: any;
  @ViewChild('videomark') htmlVideoElement;
  private index: number; 
  constructor(private playerSrv: PlayerService) { }

  ngOnInit() {
    this.index = this.playerSrv.getVideoIndex(this.video);
    
    this.playerSrv.currentVideoObservable.subscribe(newvideo => {
      if(newvideo == this.video){
        //this.htmlVideoElement.nativeElement.scrollIntoView({block: "start", behavior: "smooth"});
        const toTop = this.htmlVideoElement.nativeElement.offsetTop;
        const height = this.htmlVideoElement.nativeElement.clientHeight;
        document.body.scrollTop = toTop - 75 + height/2;
      }
    })
  }

  play(): void {
    this.playerSrv.play(this.video);
  }

  isActive(): boolean {
   return this.index == this.playerSrv.currentVideoIndex;
  }

}
