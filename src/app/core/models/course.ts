export interface Course {
  id: number;
  name: string;
  date: string;
  duration: number;
  description: string;
  isTopRated: boolean;
  authors: [
      {
        id: number;
        name: string;
        lastName: string;
      }
    ];
  length: number;
}

export default class CourseMock {
  static generateMock() {
    return {
      id: 0,
      name: '',
      date: '',
      duration: 0,
      description: '',
      isTopRated: false,
      authors: [
        {
          id: 0,
          name: '',
          lastName: '',
        }
      ],
      length: 0
    };
  }
}

export interface DeletedItem {
  id: number;
  name: string;
}
