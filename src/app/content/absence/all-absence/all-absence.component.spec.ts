import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAbsenceComponent } from './all-absence.component';

describe('AllAbsenceComponent', () => {
  let component: AllAbsenceComponent;
  let fixture: ComponentFixture<AllAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
