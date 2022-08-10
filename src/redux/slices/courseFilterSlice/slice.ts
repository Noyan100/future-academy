import { createSlice } from '@reduxjs/toolkit';
import { TFilters } from './types';

const initialState: TFilters = {
  category: '',
  duration: 0,
  age: 'child',
  level: 'light',
  type: 'any',
};

const courseFilterSlice = createSlice({
  name: 'courseFilterSlice',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = courseFilterSlice.actions;

export default courseFilterSlice.reducer;
