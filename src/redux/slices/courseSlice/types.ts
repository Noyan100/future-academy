export type TCourse = {
  id: number;
  title: string;
  text: string;
  duration: number;
  icon: string;
  program: string;
  category: string;
};

export type fetchCoursesArgs = {
  category: string;
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
