import {TestBed} from '@angular/core/testing';

import {CoursesService} from './courses.service';

describe('CoursesService', () => {
  let service: CoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesService]
    });

    service = TestBed.get(CoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock data', () => {
    expect(service.getList(0)).toEqual(service.mockData);
  });

});
