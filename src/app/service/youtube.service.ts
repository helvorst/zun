import { Observable, Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';


@Injectable()
export class YoutubeService {
  private baseUrl = 'https://content.googleapis.com/youtube/v3/';
  private key = 'AIzaSyDItKtteuFaHZJ4kCBb9d4hnb6xPF27QG4';

  private videos = [];
  private playlist = new Subject();
  private currentVideo = new Subject();
  constructor(private http: Http) { }

  getPartialPlaylist(npt?): Observable<any> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('maxResults', '50');
    params.set('part', 'snippet,contentDetails');
    params.set('playlistId', 'PLLsmbWsQuHtRjX_JQwBuSWaF3Qie7Au7u');
    params.set('key', this.key);
    if(npt){
      params.set('pageToken', npt)
    }
    return this.http.get(this.baseUrl + 'playlistItems', {search: params})
    .flatMap((response: Response) => {
      let result = response.json();
      let nextPAgeToken = result.nextPageToken;
      let partialResponse = result.items;
      var partialResponseObservable = Observable.from(partialResponse);

      return Observable.concat(partialResponseObservable, nextPAgeToken ? this.getPartialPlaylist(nextPAgeToken) : Observable.empty());
    })
    
  };

  getPlaylistItems(): Observable<any> {
    let nextPage = null;
    return this.getPartialPlaylist();

    //return    
  };

  setVideo(video: any) {
    this.currentVideo.next(video);
  }

  getVideo() {
    return this.currentVideo;
  }
}
