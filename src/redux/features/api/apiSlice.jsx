import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["product"],

  endpoints: (builder) => ({
    // Products Api
    getProducts: builder.query({
      query: () => `/products`,
      providesTags: ["product"],
    }),

    getSingleProduct: builder.query({
      query: (id) => `/product/${id}`,
      providesTags: ["product"],
    }),

    postProduct: builder.mutation({
      query: (data) => ({
        url: `/product`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/products/${id}`,
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    deleteProduct: builder.mutation({
      query(id) {
        return {
          url: `/product/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),

    // Users Api
    getUsers: builder.query({
      query: () => `/users`,
      providesTags: ["product"],
    }),

    getSingleUser: builder.query({
      query: (id) => `/user/${id}`,
      providesTags: ["product"],
    }),

    postUser: builder.mutation({
      query: (data) => ({
        url: `/user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        method: "PUT",
        url: `/user/${id}`,
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    deleteUser: builder.mutation({
      query(id) {
        return {
          url: `/user/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useUpdateProductMutation,
  useGetProductsQuery,
  usePostProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useAllProductQuery,
  useGetUsersQuery,
  useGetSingleUserQuery,
  usePostUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = apiSlice;
