import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistLookupComponent } from './playlist-lookup.component';

describe('PlaylistLookupComponent', () => {
  let component: PlaylistLookupComponent;
  let fixture: ComponentFixture<PlaylistLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
