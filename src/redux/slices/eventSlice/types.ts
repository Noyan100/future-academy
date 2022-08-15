export type TEvent = {
  id: string;
  title: string;
  previewtext: string;
  type: string;
  date: string;
  background: string;
};

export interface IEventSlice {
  items: TEvent[];
  status: 'loading' | 'success' | 'error';
  currentEvent: TEvent;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
