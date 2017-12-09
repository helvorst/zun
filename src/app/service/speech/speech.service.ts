import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SpeechService {

  constructor() { }

  recognize(): Observable<string> {
    return new Observable(observer => {
      const speech = new (window as any).webkitSpeechRecognition();
      speech.lang = 'en-US';
      const resultHandler = (e) => {
        observer.next(e.results[0][0].transcript);
        observer.complete();
      };
      speech.addEventListener('result', resultHandler);
      speech.start();
      return () => {
        speech.removeEventListener('result', resultHandler);
        speech.abort();
      }
    });
  }
}
