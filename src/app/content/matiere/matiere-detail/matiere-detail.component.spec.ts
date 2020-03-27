import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatiereDetailComponent } from './matiere-detail.component';

describe('MatiereDetailComponent', () => {
  let component: MatiereDetailComponent;
  let fixture: ComponentFixture<MatiereDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatiereDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatiereDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
