import { configureStore } from '@reduxjs/toolkit';
import courses from './slices/courseSlice/courseSlice';

export const store = configureStore({
  reducer: { courses },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
