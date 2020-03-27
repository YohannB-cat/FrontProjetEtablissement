import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedExamenComponent } from './detailed-examen.component';

describe('DetailedExamenComponent', () => {
  let component: DetailedExamenComponent;
  let fixture: ComponentFixture<DetailedExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
