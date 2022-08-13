import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IEventSlice, TEvent, Status } from './types';

export const fetchEvents = createAsyncThunk('users/fetchEvents', async () => {
  console.log('Вызов');
  const { data } = await axios.get<TEvent[]>(`https://62f37628a84d8c968123bc84.mockapi.io/events`);
  return data as TEvent[];
});

const initialState: IEventSlice = {
  items: [],
  status: Status.LOADING, //loading, success, error
};

const eventSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.status = Status.SUCCESS;
      state.items = action.payload;
    });
    builder.addCase(fetchEvents.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = eventSlice.actions;

export default eventSlice.reducer;
