import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerTitleComponent } from './player-title.component';
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";

describe('PlayerTitleComponent', () => {
  let component: PlayerTitleComponent;
  let fixture: ComponentFixture<PlayerTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerTitleComponent ],
      providers: [{ provide: PlayerService, useClass: PlayerServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
