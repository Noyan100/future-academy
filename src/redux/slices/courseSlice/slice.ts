import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICourseSlice, TCourse, Status, fetchCoursesArgs } from './types';

export const fetchCourses = createAsyncThunk(
  'users/fetchCourses',
  async (params: fetchCoursesArgs) => {
    const { category, age, level, type, duration } = params;
    const { data } = await axios.get<TCourse[]>(
      `https://62f37628a84d8c968123bc84.mockapi.io/courses`,
    );
    const filteredData = data.filter((obj) => {
      if (
        (obj.category === category || category === 'Все категории') &&
        obj.age === age &&
        (obj.level === level || level === 'any' || obj.level === 'any') &&
        (obj.type === type || type === 'any' || obj.type === 'any') &&
        obj.duration <= duration
      )
        return obj;
    });
    return filteredData as TCourse[];
  },
);

const initialState: ICourseSlice = {
  items: [],
  status: Status.LOADING, //loading, success, error
};

const courseSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
  },
});

export const { setItems } = courseSlice.actions;

export default courseSlice.reducer;
