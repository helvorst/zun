import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerControlsComponent } from './player-controls.component';
import { PlayerService } from "../../service/player/player.service";
//import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { MaterialModule } from '../../material.module';

class LocalPlayerServiceStub {
  constructor(){
    this.history = [];
    this.playerState = {
      isLooped: false,
      isShuffled: true,
      isStopped: false
    };
    this.playerState.isShuffled = false;
    this.player = {
      play() {},
      pause() {}
    };
    this.setState=()=>{};
    this.switchTo=()=>{};
  }
  history;
  public playerState;
  //  = {
  //   isStopped: false,
  //   isLooped: false,
  //   isShuffled: true
  // };
  player;
  setState;
  switchTo;
}

describe('PlayerControlsComponent', () => {
  let component: PlayerControlsComponent;
  let fixture: ComponentFixture<PlayerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerControlsComponent ],
      providers: [{ provide: PlayerService, useClass: LocalPlayerServiceStub }],
      imports: [
        MaterialModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

