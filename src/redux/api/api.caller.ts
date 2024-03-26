import { createApi } from '@reduxjs/toolkit/query/react';
// import { IResponseInfo } from 'interfaces';
import { IUserLogin, IUser } from 'interfaces/type';
import customBaseQuery from './fetchBase';

export const apiCaller = createApi({
  reducerPath: 'apiCaller',
  refetchOnMountOrArgChange: 30,
  baseQuery: customBaseQuery(),
  tagTypes: [],
  endpoints: (builder) => ({
    registerUser: builder.mutation<IUserLogin, Omit<IUserLogin, 'id'>>({
      query: (user) => ({
        url: `/users`,
        method: 'POST',
        body: user
      })
    }),
    login: builder.mutation({
      query: (user) => ({
        url: '/login',
        method: 'POST',
        body: user
      })
    }),
    getListUser: builder.query<IUser[], void>({
      query: (user) => ({
        url: `/users`,
        method: 'GET',
        body: user
      })
    })
  })
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useLazyGetListUserQuery,
  useGetListUserQuery
} = apiCaller;
