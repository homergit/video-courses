import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTileComponent } from './course-tile.component';
import { PipeModule } from '../../../core/pipe/pipe.module';

describe('CourseTileComponent', () => {
  let component: CourseTileComponent;
  let fixture: ComponentFixture<CourseTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTileComponent ],
      imports: [PipeModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTileComponent);
    component = fixture.componentInstance;
    component.course = {
      id: 1,
      title: 'Title',
      duration: 100,
      creationDate: new Date(2019, 10, 29, 1, 10),
      description: 'text'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('search() should call filterData.emit(term)', () => {
    spyOn(component.delete, 'emit');
    component.deleteRequest();

    expect(component.delete.emit).toHaveBeenCalledWith(1);
  });
});
