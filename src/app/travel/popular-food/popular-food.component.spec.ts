import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularFoodComponent } from './popular-food.component';

describe('PopularFoodComponent', () => {
  let component: PopularFoodComponent;
  let fixture: ComponentFixture<PopularFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
