import { createSlice } from '@reduxjs/toolkit';
import { TFilters } from './types';

const initialState: TFilters = {
  category: 'Все категории',
  duration: 24,
  age: 'children',
  level: 'any',
  type: 'any',
};

const courseFilterSlice = createSlice({
  name: 'courseFilterSlice',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setDuration: (state, action) => {
      state.duration = action.payload;
    },
    resetAll: (state, action) => {
      state.level = action.payload;
      state.type = 'any';
      state.duration = 24;
    },
  },
});

export const { setCategory, setAge, setLevel, setType, setDuration, resetAll } =
  courseFilterSlice.actions;

export default courseFilterSlice.reducer;
