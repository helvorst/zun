import { TestBed, inject } from '@angular/core/testing';
//import { HttpModule } from '@angular/http';
import { Http, HttpModule, XHRBackend } from '@angular/http';
import { YoutubeService } from './youtube.service';
import { MockBackend } from '@angular/http/testing';

describe('YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        YoutubeService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([YoutubeService], (service: YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
