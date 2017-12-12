import { TestBed, inject } from '@angular/core/testing';
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { RouterTestingModule } from "@angular/router/testing";
import { WatchValidGuard } from './watch-valid.guard';
import { YoutubeServiceStub } from '../../service/youtube/youtube.service.stub';
import { YoutubeService } from '../../service/youtube/youtube.service';

describe('IsWatchValidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WatchValidGuard,
        { provide: PlayerService, useClass: PlayerServiceStub },
        { provide: YoutubeService, useClass: YoutubeServiceStub }
      ],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([WatchValidGuard], (service: WatchValidGuard) => {
    expect(service).toBeTruthy();
  }));
});
