//import {Injectable} from '@angular/core';
import {Course} from "../../core/models/course";
// import {CourseModule} from './course.module';

// @Injectable({
//   providedIn: CourseModule
// })

export class CoursesService {

  mockData: Course[] = [
    {
      id: 1,
      title: 'Video Course 1. one',
      duration: 125,
      creationDate: new Date(2019, 10, 8, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: true
    },
    {
      id: 2,
      title: 'Video Course 2. two',
      duration: 123,
      creationDate: new Date(2019, 11, 20, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 3,
      title: 'Video Course 3. Three',
      duration: 23,
      creationDate: new Date(2019, 10, 29, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 4,
      title: 'Video Course 4. One',
      duration: 13,
      creationDate: new Date(2019, 10, 4, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 5,
      title: 'Video Course 5. TWO ONE',
      duration: 123,
      creationDate: new Date(2019, 9, 0, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 6,
      title: 'Video Course 6. Name tag',
      duration: 12233,
      creationDate: new Date(2019, 9, 27, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 7,
      title: 'Video Course 7. Name tag',
      duration: 13,
      creationDate: new Date(2019, 9, 26, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 8,
      title: 'Video Course 8. Name tag',
      duration: 123,
      creationDate: new Date(2019, 9, 29, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 9,
      title: 'Video Course 9. Name tag',
      duration: 123,
      creationDate: new Date(2019, 9, 9, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
    {
      id: 10,
      title: 'Video Course 10. Name tag',
      duration: 3,
      creationDate: new Date(2019, 9, 5, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: true
    },
    {
      id: 11,
      title: 'Video Course 11. Name tag',
      duration: 123,
      creationDate: new Date(2019, 8, 2, 1, 10),
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details' +
        '      about various components of a course description. Course descriptions report information about a university or' +
        '      college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course' +
        '      schedules that contain descriptions for all courses offered during a particular semester.',
      isTopRated: false
    },
  ];

  constructor() { }

  getList() {
    return this.mockData;
  }

  createCourse() {
    console.log('createCourse, id:');
  }

  getItem(id: number) {
    console.log('getItem, id:');
  }

  updateItem(id: number) {
    console.log('updateItem, id:');
  }

  removeItem(id: number) {
    let i = this.mockData.length;

    while(i--){
      if(this.mockData[i] && this.mockData[i].id === id){
        this.mockData.splice(i,1);
      }
    }
    return this.mockData;
  }
}
