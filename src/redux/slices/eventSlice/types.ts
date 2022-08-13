export type TEvent = {
  id: string;
  title: string;
  text: string;
  type: string;
  date: string;
  background: string;
};

export interface IEventSlice {
  items: TEvent[];
  status: 'loading' | 'success' | 'error';
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
