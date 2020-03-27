import { TestBed } from '@angular/core/testing';

import { EtudiantsService } from './etudiants.service';

describe('EtudiantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtudiantsService = TestBed.get(EtudiantsService);
    expect(service).toBeTruthy();
  });
});
