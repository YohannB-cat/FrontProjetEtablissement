import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClasseComponent } from './all-classe.component';

describe('AllClasseComponent', () => {
  let component: AllClasseComponent;
  let fixture: ComponentFixture<AllClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
