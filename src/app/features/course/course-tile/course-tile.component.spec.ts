import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseTileComponent} from './course-tile.component';
import {PipeModule} from '../../../core/pipes/pipe.module';
import {DirectiveModule} from '../../../core/directives/directive.module';


describe('CourseTileComponent', () => {
  let component: CourseTileComponent;
  let fixture: ComponentFixture<CourseTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTileComponent ],
      imports: [
        PipeModule,
        DirectiveModule
      ],
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
      description: 'text',
      isTopRated: true
    };

    fixture.detectChanges();
  });

  it('should emit data to parent component', () => {
    spyOn(component.delete, 'emit');
    component.deleteRequest();

    expect(component.delete.emit).toHaveBeenCalledWith(Object({ id: 1, title: 'Title' }));
  });
});
