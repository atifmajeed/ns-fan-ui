import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CeilingFanService } from './ceiling-fan.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('CeilingFanService', () => {
  let service: CeilingFanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],});
    service = TestBed.inject(CeilingFanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

