export type TEvent = {
  id: string;
  title: string;
  previewtext: string;
  type: string;
  date: string;
  background: string;
  subtitle: string;
  eventlist: string[];
  whatinevent: string[];
  programtext: string;
  programlist: [
    {
      title: string;
      text: string;
    },
  ];
  managers: [
    {
      imgSrc: string;
      name: string[];
      text: string[];
    },
  ];
  photos: string[];
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
