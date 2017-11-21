import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerControlsComponent } from './player-controls.component';
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";

describe('PlayerControlsComponent', () => {
  let component: PlayerControlsComponent;
  let fixture: ComponentFixture<PlayerControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerControlsComponent ],
      providers: [{ provide: PlayerService, useClass: PlayerServiceStub }]
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
