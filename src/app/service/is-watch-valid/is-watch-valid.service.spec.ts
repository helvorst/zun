import { TestBed, inject } from '@angular/core/testing';

import { IsWatchValidService } from './is-watch-valid.service';
import { PlayerService } from "../player/player.service";
import { PlayerServiceStub } from "../player/player.service.stub";
import { RouterTestingModule } from "@angular/router/testing";

describe('IsWatchValidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsWatchValidService,
      { provide: PlayerService, useClass: PlayerServiceStub }],
      imports: [RouterTestingModule]
    });
  });

  it('should be created', inject([IsWatchValidService], (service: IsWatchValidService) => {
    expect(service).toBeTruthy();
  }));
});
