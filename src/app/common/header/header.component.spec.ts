import { PlayerService } from '../../service/player/player.service';
import { PlayerServiceStub } from '../../service/player/player.service.stub';
import { VisualisationComponent } from '../../visualisation/visualisation.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { PlayerTitleComponent } from "../player-title/player-title.component";
import { PlayerControlsComponent } from "../player-controls/player-controls.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { MaterialModule } from '../../material.module';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        NavbarComponent,
        PlayerControlsComponent,
        PlayerTitleComponent
      ],
       imports: [
        MaterialModule
       ]
    })
      .overrideComponent(HeaderComponent, {
        set: {
          providers: [{ provide: PlayerService, useClass: PlayerServiceStub }]
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
