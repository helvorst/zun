import { TestBed, inject } from '@angular/core/testing';
//import { HttpModule } from '@angular/http';
import { Connection, Http, HttpModule, ResponseOptions, Response, XHRBackend } from '@angular/http';
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

  it('should get videos', inject([YoutubeService, XHRBackend], (service: YoutubeService, mock: MockBackend) => {
    var fakeItems = {
      items: [{ id: 0, name: 'gaga' }]
    };
    mock.connections.subscribe(connection => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(fakeItems)
      })));
    });
    service.getPlaylistItems()
      .subscribe(result => {
        for (const i in result) {
          expect(result[i]).toEqual(fakeItems.items[i]);
        }
      });
  }))
});
