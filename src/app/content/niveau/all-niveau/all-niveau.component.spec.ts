import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNiveauComponent } from './all-niveau.component';

describe('AllNiveauComponent', () => {
  let component: AllNiveauComponent;
  let fixture: ComponentFixture<AllNiveauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNiveauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNiveauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
