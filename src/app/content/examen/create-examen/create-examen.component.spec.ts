import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamenComponent } from './create-examen.component';

describe('CreateExamenComponent', () => {
  let component: CreateExamenComponent;
  let fixture: ComponentFixture<CreateExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
