import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltabComponent } from './tooltab.component';
import { VisualisationComponent } from "../../visualisation/visualisation.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from '../../material.module';

describe('TooltabComponent', () => {
  let component: TooltabComponent;
  let fixture: ComponentFixture<TooltabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltabComponent,
      VisualisationComponent ],
      imports: [ BrowserAnimationsModule, MaterialModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
