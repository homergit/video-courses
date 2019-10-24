import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';
import {Course} from '../../../core/models/course';

@Component({
  selector: 'app-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss']
})
export class CoursesSectionComponent implements OnChanges,
                                                OnInit,
                                                DoCheck,
                                                AfterContentInit,
                                                AfterContentChecked,
                                                AfterViewInit,
                                                AfterViewChecked,
                                                OnDestroy {
  coursesToDisplay: Array<Course> = [];
  numberOfCoursesToLoad = 5;
  shouldShowLoadMore = true;
  term: string;
  mockCourses: Array<Course>;
  dataExample: Array<Course> = [
    {
      id: 1,
      title: 'Video Course 1. one',
      duration: 125,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 2,
      title: 'Video Course 2. two',
      duration: 123,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 3,
      title: 'Video Course 3. Three',
      duration: 23,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 4,
      title: 'Video Course 4. One',
      duration: 13,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 5,
      title: 'Video Course 5. TWO ONE',
      duration: 123,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 6,
      title: 'Video Course 6. Name tag',
      duration: 12233,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 7,
      title: 'Video Course 7. Name tag',
      duration: 13,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 8,
      title: 'Video Course 8. Name tag',
      duration: 123,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 9,
      title: 'Video Course 9. Name tag',
      duration: 123,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 10,
      title: 'Video Course 10. Name tag',
      duration: 3,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
    {
      id: 11,
      title: 'Video Course 11. Name tag',
      duration: 123,
      creationDate: new Date(),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.'
    },
  ];


  constructor() {
    console.log('**CoursesSection - constructor**');
  }

  ngOnInit() {
    this.mockCourses = this.dataExample;
    this.loadCourses();
    console.log('**CoursesSection - ngOnInit**');
  }

  ngOnChanges() {
    console.log('**CoursesSection - ngOnChanges**');
  }

  ngDoCheck() {
    console.log('**CoursesSection - ngDoCheck**');
  }

  ngAfterContentInit() {
    console.log('**CoursesSection - ngAfterContentInit**');
  }

  ngAfterContentChecked() {
    console.log('**CoursesSection - ngAfterContentChecked**');
  }

  ngAfterViewInit() {
    console.log('**CoursesSection - ngAfterViewInit**');
  }

  ngAfterViewChecked() {
    console.log('**CoursesSection - ngAfterViewChecked**');
  }

  ngOnDestroy() {
    console.log('**CoursesSection - ngOnDestroy**');
  }

  delete(deletedCourseId: number) {
    console.log('deletedCourseId: ', deletedCourseId);
    this.coursesToDisplay = this.coursesToDisplay.filter((course) => course.id !== deletedCourseId);
  }

  loadCourses() {
    const loadedCourses = this.mockCourses.slice(this.numberOfCoursesToLoad - 5, this.numberOfCoursesToLoad);
    this.coursesToDisplay = this.coursesToDisplay.concat(loadedCourses);
    this.shouldShowLoadMore = this.numberOfCoursesToLoad <= this.mockCourses.length;
    this.numberOfCoursesToLoad += 5;
  }

  filterData(term: string) {
    this.term = term;
  }
}
