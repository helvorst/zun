import { PlayerService } from '../../service/player/player.service';
import { PlayerServiceStub } from '../../service/player/player.service.stub';
import { VisualisationComponent } from '../../visualisation/visualisation.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent,
      VisualisationComponent ]
    })
    .overrideComponent(HeaderComponent, {
      set: {
        providers: [{provide: PlayerService, useClass: PlayerServiceStub}]
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
