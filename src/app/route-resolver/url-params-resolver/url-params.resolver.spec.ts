import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import {UrlYTParamsResolver} from './url-params.resolver';
import { YoutubeService } from '../../service/youtube/youtube.service';
import { YoutubeServiceStub } from '../../service/youtube/youtube.service.stub';

describe('IsSearchLoadedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UrlYTParamsResolver,
      { provide: PlayerService, useClass: PlayerServiceStub },
      { provide: YoutubeService, useClass: YoutubeServiceStub }
    ],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([UrlYTParamsResolver], (service: UrlYTParamsResolver) => {
    expect(service).toBeTruthy();
  }));
});
