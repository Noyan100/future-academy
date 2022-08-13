import { configureStore } from '@reduxjs/toolkit';
import courses from './slices/courseSlice/slice';
import coursesFilter from './slices/courseFilterSlice/slice';
import events from './slices/eventSlice/slice';

export const store = configureStore({
  reducer: { courses, coursesFilter, events },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
