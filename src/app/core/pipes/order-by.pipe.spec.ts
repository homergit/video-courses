import {OrderByPipe} from './order-by.pipe';

describe('OrderByPipe', () => {
  it('should return empty array if no data entered', () => {
    const pipe = new OrderByPipe();
    expect(pipe.transform(null, 'example')).toEqual([]);
  });

  it('should return ordered array if data entered', () => {
    const coursesToDisplay = [
      {
        id: 2,
        title: 'TitleZ',
        duration: 123,
        creationDate: new Date(2019, 10, 8, 1, 10),
        description: 'zHello',
        isTopRated: false
      },
      {
        id: 1,
        title: 'TitleA',
        duration: 12,
        creationDate: new Date(2019, 11, 8, 1, 10),
        description: 'aText',
        isTopRated: true
      }
    ];
    const orderedCourses = [
      {
        id: 1,
        title: 'TitleA',
        duration: 12,
        creationDate: new Date(2019, 11, 8, 1, 10),
        description: 'aText',
        isTopRated: true
      },
      {
        id: 2,
        title: 'TitleZ',
        duration: 123,
        creationDate: new Date(2019, 10, 8, 1, 10),
        description: 'zHello',
        isTopRated: false
      }
    ];
    const pipe = new OrderByPipe();
    expect(pipe.transform(coursesToDisplay, 'id')).toEqual(orderedCourses);
    expect(pipe.transform(coursesToDisplay, 'title')).toEqual(orderedCourses);
    expect(pipe.transform(coursesToDisplay, 'duration')).toEqual(orderedCourses);
    expect(pipe.transform(coursesToDisplay, 'creationDate')).toEqual(orderedCourses);
    expect(pipe.transform(coursesToDisplay, 'description')).toEqual(orderedCourses);
    expect(pipe.transform(coursesToDisplay, 'isTopRated')).toEqual(orderedCourses);
  });
});
