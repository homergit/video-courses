import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('should return empty array if no data entered', () => {
    const pipe = new FilterPipe();
    let data = [{
      id: 1,
      title: 'Title',
      duration: 123,
      creationDate: new Date(),
      description: 'Hello',
      isTopRated: false
    }];
    expect(pipe.transform(null, 'qwe')).toEqual([]);
    expect(pipe.transform(data, null)).toEqual(data);
  });

  it('should return filtered array if data entered', () => {
    const coursesToDisplay = [
      {
        id: 1,
        title: 'Title',
        duration: 123,
        creationDate: new Date(),
        description: 'Hello',
        isTopRated: false
      },
      {
        id: 2,
        title: 'Title2',
        duration: 123,
        creationDate: new Date(),
        description: 'Text',
        isTopRated: false
      }
    ];
    const filteredCourses = [
      {
        id: 1,
        title: 'Title',
        duration: 123,
        creationDate: new Date(),
        description: 'Hello',
        isTopRated: false
      }
    ];
    const pipe = new FilterPipe();

    expect(pipe.transform(coursesToDisplay, 'Hello')).toEqual(filteredCourses);
  });
});
