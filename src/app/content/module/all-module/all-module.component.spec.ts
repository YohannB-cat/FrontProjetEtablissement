import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllModuleComponent } from './all-module.component';

describe('AllModuleComponent', () => {
  let component: AllModuleComponent;
  let fixture: ComponentFixture<AllModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
