import { TestBed, inject } from '@angular/core/testing';

import { IsChannelLoadedService } from './is-channel-loaded.service';
import { RouterTestingModule } from "@angular/router/testing";
import { PlayerService } from "../player/player.service";
import { PlayerServiceStub } from "../player/player.service.stub";

describe('IsSearchLoadedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsChannelLoadedService,
      { provide: PlayerService, useClass: PlayerServiceStub }],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([IsChannelLoadedService], (service: IsChannelLoadedService) => {
    expect(service).toBeTruthy();
  }));
});
