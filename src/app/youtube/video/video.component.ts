import { YoutubeService } from '../../service/youtube.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.less']
})
export class VideoComponent implements OnInit {

  @Input() video: any;
  constructor(private ytSrv: YoutubeService) { }

  ngOnInit() {
  }

  play(): void {
    this.ytSrv.setVideo(this.video);
  }

}
