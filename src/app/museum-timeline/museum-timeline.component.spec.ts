import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseumTimelineComponent } from './museum-timeline.component';

describe('MuseumTimelineComponent', () => {
  let component: MuseumTimelineComponent;
  let fixture: ComponentFixture<MuseumTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuseumTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
