import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { SpeechService } from '../service/speech/speech.service';
import { PlayerService } from '../service/player/player.service';
import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/repeat';

@Component({
  selector: 'app-speech-recognition',
  templateUrl: './speech-recognition.component.html',
  styleUrls: ['./speech-recognition.component.less']
})
export class SpeechRecognitionComponent implements OnInit {
  isListening = false;
  speechSubscription: ISubscription;

  constructor(private speachSrv: SpeechService,
  private playerSrv: PlayerService) { }

  ngOnInit() {
    // const sourceTwo = Observable.interval(1000);
    // const exampleTwo = sourceTwo.take(3).repeat(Infinity)
    // .subscribe(x => console.log(x));
  }

  supscribeToSheechRecognition() {
    this.speechSubscription =  this.speachSrv.recognize()
    .subscribe(this.processCommand.bind(this));
  }

  processCommand (result) {
    const command = result.toLowerCase();    
    if( command == 'next' || command == 'skip') {
      this.playerSrv.switchTo(1);
      console.log('next: ' + result);
    } else if (command == 'back') {
      this.playerSrv.switchTo(-1);
      console.log('back: ' + result);
    } else {
      console.log('command nor recognized');
    }        
    this.supscribeToSheechRecognition();
  }

  listen() {
    this.isListening = true;
    this.supscribeToSheechRecognition();
  }

  unlisten() {
    this.isListening = false;
    this.speechSubscription.unsubscribe();
  }
}
