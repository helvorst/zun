import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';


@Injectable()
export class YoutubeService {
  private baseUrl = 'https://content.googleapis.com/youtube/v3/';
  private key = 'AIzaSyDItKtteuFaHZJ4kCBb9d4hnb6xPF27QG4';
  private currentVideo = new Subject();
  constructor(private http: Http) { }

  getPlaylistItems(): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('maxResults', '25');
    params.set('part', 'snippet,contentDetails');
    params.set('playlistId', 'PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u');
    params.set('key', this.key);

    return this.http.get(this.baseUrl + 'playlistItems', {search: params})
    .map((result: Response) => result.json().items);    
  };

  setVideo(video: any) {
    this.currentVideo.next(video);
  }

  getVideo() {
    return this.currentVideo;
  }
}
