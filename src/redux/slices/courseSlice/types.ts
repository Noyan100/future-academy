export type TCourse = {
  id: number;
  title: string;
  text: string;
  duration: number;
  icon: string;
  program: string;
  category: string;
  age: string;
  level: string;
  type: string;
  sale: number;
};

export type fetchCoursesArgs = {
  category: string;
  age: string;
  level: string;
  type: string;
  duration: number;
};

export interface ICourseSlice {
  items: TCourse[];
  status: 'loading' | 'success' | 'error';
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
