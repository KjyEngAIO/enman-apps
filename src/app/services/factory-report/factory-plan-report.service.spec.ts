import { TestBed } from '@angular/core/testing';

import { FactoryPlanReportService } from './factory-plan-report.service';

describe('FactoryPlanReportService', () => {
  let service: FactoryPlanReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryPlanReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
