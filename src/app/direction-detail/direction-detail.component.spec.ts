import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionDetailComponent } from './direction-detail.component';

describe('DirectionDetailComponent', () => {
  let component: DirectionDetailComponent;
  let fixture: ComponentFixture<DirectionDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
