import { createSlice } from '@reduxjs/toolkit';
import {apiSlice} from './store';
const initialState = {
  data: null,
  isLoading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  // reducers: {
  //   // Local update function
  //   updateLocally: (state, action) => {
  //     state.data = action.payload;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        apiSlice.endpoints.fetchUser.pending,
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        apiSlice.endpoints.fetchUser.fulfilled,
        (state, action) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addMatcher(
        apiSlice.endpoints.fetchUser.rejected,
        (state, action) => {
          state.isLoading = false;
          state.error = action.error.message;
        }
      )
    .addMatcher(
      apiSlice.endpoints.createUser.fulfilled,
      (state, action) => {
        state.data = action.payload;
        // Handle successful database update (e.g., show a success message)
      }
    )
    .addMatcher(
      apiSlice.endpoints.createUser.rejected,
      (state, action) => {
        // Handle failed database update (e.g., show an error message)
      }
    );
  },
});

export const { updateLocally } = dataSlice.actions;
export default dataSlice.reducer;