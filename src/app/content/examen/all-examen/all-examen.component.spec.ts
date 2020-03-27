import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllExamenComponent } from './all-examen.component';

describe('AllExamenComponent', () => {
  let component: AllExamenComponent;
  let fixture: ComponentFixture<AllExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
