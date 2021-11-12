import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogComponentComponent } from './mat-dialog-component.component';

describe('MatDialogComponentComponent', () => {
  let component: MatDialogComponentComponent;
  let fixture: ComponentFixture<MatDialogComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDialogComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
