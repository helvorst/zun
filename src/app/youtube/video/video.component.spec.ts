import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { PlayerService } from "../../service/player/player.service";
import { YoutubeServiceStub } from "../../service/youtube/youtube.service.stub";

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent],
      providers: [{ provide: PlayerService, useClass: PlayerServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;

    component.video = {
      "kind": "youtube#playlistItem",
      "etag": "\"m2yskBQFythfE4irbTIeOgYYfBU/vUqFa-eiAcKYrqd5h0syFZsn33U\"",
      "id": "UExMc21iV3NRdUh0UmpYX0pRd0J1U1dhRjNRaWU3QXU3dS5BN0Q0NTk3QTY3NEFDOTE1",
      "snippet": {
        "publishedAt": "2017-07-28T22:29:54.000Z",
        "channelId": "UCsA8KTCYZ7PUvDEhAscOm9w",
        "title": "Delerium - Silence feat. Sarah McLachlan (Above & Beyond's 21st Century Remix)",
        "description": "Remixed in 2004 by Above & Beyond.",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/BhG-Cj_bTV4/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Hel Vorst",
        "playlistId": "PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "BhG-Cj_bTV4"
        }
      },
      "contentDetails": {
        "videoId": "BhG-Cj_bTV4",
        "videoPublishedAt": "2011-07-13T13:00:47.000Z"
      }
    };
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
