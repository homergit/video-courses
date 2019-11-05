import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseRelevanceDirective } from './course-relevance.directive';

@Component({
  template: `<div
              class="course-tile"
              [appCourseRelevance]="course.creationDate">
              TEST
            </div>`
})
class TestCourseTileComponent {
  course = {creationDate : new Date()};
}

describe('CourseRelevanceDirective', () => {
  let component: TestCourseTileComponent;
  let fixture: ComponentFixture<TestCourseTileComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestCourseTileComponent, CourseRelevanceDirective]
    });
    fixture = TestBed.createComponent(TestCourseTileComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement.query(By.css('div'));
  });

  it('should change border color to blue', () => {
    const weekAfterCurrentDate =  new Date(Date.now() + 6048e5);

    component.course.creationDate = weekAfterCurrentDate;
    fixture.detectChanges();
    expect(el.nativeElement.style.borderColor).toBe('rgb(179, 179, 242)');
  });

  it('should change border color to green', () => {
    const weekBeforeCurrentDate =  new Date(Date.now() - 6048e5);

    component.course.creationDate = weekBeforeCurrentDate;
    fixture.detectChanges();
    expect(el.nativeElement.style.borderColor).toBe('rgb(161, 246, 161)');
  });

  it('should change set border color', () => {
    const threeWeeksBeforeCurrentDate =  new Date(Date.now() - (6048e5 * 3));

    component.course.creationDate = threeWeeksBeforeCurrentDate;
    fixture.detectChanges();
    expect(el.nativeElement.style.borderColor).toBe('');
  });
});

