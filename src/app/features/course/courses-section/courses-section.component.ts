import {Component, OnInit} from '@angular/core';
import {Course} from '../../../core/models/course';

@Component({
  selector: 'app-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.scss']
})
export class CoursesSectionComponent implements OnInit {
  coursesToDisplay: Course[] = [];
  numberOfCoursesToLoad = 5;
  shouldShowLoadMore = true;
  term: string;
  mockCourses: Course[];
  dataExample: Course[] = [
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
  }

  ngOnInit() {
    this.mockCourses = this.dataExample;
    this.loadCourses();
  }

  delete(deletedCourseId: number) {
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
