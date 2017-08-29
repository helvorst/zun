import { TestBed, inject } from '@angular/core/testing';

import { IsPlaylistLoadedService } from './is-playlist-loaded.service';
import { RouterTestingModule } from "@angular/router/testing";
import { PlayerService } from "../player/player.service";
import { PlayerServiceStub } from "../player/player.service.stub";
import { YoutubeService } from "../youtube/youtube.service";
import { YoutubeServiceStub } from "../youtube/youtube.service.stub";

describe('IsWatchLoadedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsPlaylistLoadedService,
        { provide: PlayerService, useClass: PlayerServiceStub },
        { provide: YoutubeService, useClass: YoutubeServiceStub }],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([IsPlaylistLoadedService], (service: IsPlaylistLoadedService) => {
    expect(service).toBeTruthy();
  }));
});
