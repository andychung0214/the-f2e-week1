import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelHeaderComponent } from './travel-header.component';

describe('TravelHeaderComponent', () => {
  let component: TravelHeaderComponent;
  let fixture: ComponentFixture<TravelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
