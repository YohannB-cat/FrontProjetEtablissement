import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailModuleComponent } from './detail-module.component';

describe('DetailModuleComponent', () => {
  let component: DetailModuleComponent;
  let fixture: ComponentFixture<DetailModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
