import { Http } from '@angular/http';
import { YoutubeServiceStub } from '../youtube/youtube.service.stub';
import { YoutubeService } from '../youtube/youtube.service';
import { TestBed, inject } from '@angular/core/testing';

import { PlayerService } from './player.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('PlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerService, {provide: YoutubeService, useClass: YoutubeServiceStub}],
      imports: [RouterTestingModule]
    })
    // .overrideComponent(PlayerService, {
    //   set: {
    //     providers: []
    //   }
    // })
  });

  it('should be created', inject([PlayerService], (service: PlayerService) => {
    expect(service).toBeTruthy();
  }));

  // it('sgould subscribe to video items', inject([PlayerService], (service: PlayerService) => {
  //   expect(service.currentPlaylistItems.length > 0).toBe(true);
  // }))
});
