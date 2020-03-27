import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClasseComponent } from './create-classe.component';

describe('CreateClasseComponent', () => {
  let component: CreateClasseComponent;
  let fixture: ComponentFixture<CreateClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
