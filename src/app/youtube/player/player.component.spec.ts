//import * as jasmine from 'jasmine';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponent } from './player.component';
import { YoutubeServiceStub } from "../../service/youtube/youtube.service.stub";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { PlayerService } from "../../service/player/player.service";

//jasmine.describe('jh', ()=>{})

describe('PlayerComponent', () => {
  let component: PlayerComponent;
  let fixture: ComponentFixture<PlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponent ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
      providers: [{provide: YoutubeService, useClass: YoutubeServiceStub},
      {provide: PlayerService, useClass: PlayerServiceStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
