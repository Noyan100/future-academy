import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type TCourse = {
  id: number;
  title: string;
  text: string;
  duration: number;
  icon: string;
  program: string;
  category: string;
};

export const fetchCourses = createAsyncThunk('users/fetchCourses', async () => {
  const { data } = await axios.get<TCourse[]>(
    `https://62f37628a84d8c968123bc84.mockapi.io/courses`,
  );
  return data as TCourse[];
});

interface courseSlice {
  items: TCourse[];
  status: 'loading' | 'success' | 'error';
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: courseSlice = {
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
