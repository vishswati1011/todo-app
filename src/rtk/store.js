import { configureStore } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an API slice
const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  endpoints: (builder) => ({
    fetchUser: builder.query({
      query: () => '/data',
    }),
    createUser: builder.mutation({
        query: (data) => ({
          url: '/data',
          method: 'PUT',
          body: data,
        }),
      }),
  }),
});

// Create the Redux store
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),   

});


export const { useFetchDataQuery, useUpdateDataMutation } = apiSlice;