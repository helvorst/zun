import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechRecognitionComponent } from './speech-recognition.component';
import { MaterialModule } from '../material.module';
import { SpeechService } from '../service/speech/speech.service';
import { SpeechServiceStub } from '../service/speech/speech.service.stub';
import { PlayerService } from '../service/player/player.service';
import { PlayerServiceStub } from '../service/player/player.service.stub';

describe('SpeechRecognitionComponent', () => {
  let component: SpeechRecognitionComponent;
  let fixture: ComponentFixture<SpeechRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechRecognitionComponent],
      imports: [MaterialModule],
      providers: [{ provide: SpeechService, useClass: SpeechServiceStub },
      { provide: PlayerService, useClass: PlayerServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeechRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
