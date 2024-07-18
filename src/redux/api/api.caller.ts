import { createApi } from '@reduxjs/toolkit/query/react';
// import { IResponseInfo } from 'interfaces';
import { IUserData, IUser } from 'interfaces/users';
import { IProduct } from 'interfaces/products';
import customBaseQuery from './fetchBase';

export const apiCaller = createApi({
  reducerPath: 'apiCaller',
  refetchOnMountOrArgChange: 30,
  baseQuery: customBaseQuery(),
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    registerUser: builder.mutation<IUserData, Omit<IUserData, 'id'>>({
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
    }),
    getListProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: `/products`,
        method: 'GET'
      }),
      providesTags: ['Products']
    }),
    getProductsById: builder.query<IProduct[], string>({
      query: (id) => `/products/${id}`
    }),
    addProducts: builder.mutation<IProduct, Omit<IProduct, 'id'>>({
      query: (product) => ({
        url: '/products',
        method: 'POST',
        body: product
      }),
      invalidatesTags: ['Products']
    })
  })
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useLazyGetListUserQuery,
  useGetListUserQuery,
  useGetListProductsQuery,
  useGetProductsByIdQuery,
  useAddProductsMutation
} = apiCaller;
