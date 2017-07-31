import { TestBed, inject } from '@angular/core/testing';
//import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { YoutubeService } from './youtube.service';

describe('YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeService, Http ]
    });
  });

  it('should be created', inject([YoutubeService], (service: YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
