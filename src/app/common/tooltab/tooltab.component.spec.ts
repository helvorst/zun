import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltabComponent } from './tooltab.component';
import { VisualisationComponent } from "../../visualisation/visualisation.component";
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe('TooltabComponent', () => {
  let component: TooltabComponent;
  let fixture: ComponentFixture<TooltabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltabComponent,
      VisualisationComponent ],
      imports: [MaterialModule, BrowserAnimationsModule],
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
