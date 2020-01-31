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

export interface DeletedItem {
  id: number;
  name: string;
}
