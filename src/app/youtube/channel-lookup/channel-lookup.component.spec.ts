import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelLookupComponent } from './channel-lookup.component';
import { ReactiveFormsModule } from "@angular/forms/";
import { YoutubeService } from "../../service/youtube/youtube.service";
import { YoutubeServiceStub } from "../../service/youtube/youtube.service.stub";
import { PlayerService } from "../../service/player/player.service";
import { PlayerServiceStub } from "../../service/player/player.service.stub";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from '../../material.module';

describe('ChannelLookupComponent', () => {
  let component: ChannelLookupComponent;
  let fixture: ComponentFixture<ChannelLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelLookupComponent ],
      imports: [ReactiveFormsModule, BrowserAnimationsModule, MaterialModule],
        providers: [{ provide: YoutubeService, useClass: YoutubeServiceStub },
          { provide: PlayerService, useClass: PlayerServiceStub }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
