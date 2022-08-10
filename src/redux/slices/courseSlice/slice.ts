import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ICourseSlice, TCourse, Status, fetchCoursesArgs } from './types';

export const fetchCourses = createAsyncThunk(
  'users/fetchCourses',
  async (params: fetchCoursesArgs) => {
    const { category } = params;
    const { data } = await axios.get<TCourse[]>(
      `https://62f37628a84d8c968123bc84.mockapi.io/courses?category=${category}`,
    );
    return data as TCourse[];
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
    builder.addCase(fetchCourses.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = courseSlice.actions;

export default courseSlice.reducer;
