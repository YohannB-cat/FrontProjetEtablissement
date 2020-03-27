import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMatiereComponent } from './all-matiere.component';

describe('AllMatiereComponent', () => {
  let component: AllMatiereComponent;
  let fixture: ComponentFixture<AllMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
