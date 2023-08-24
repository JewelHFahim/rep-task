import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["product"],

  endpoints: (builder) => ({

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

  }),
});

export const {
  useUpdateProductMutation,
  useGetProductsQuery,
  usePostProductMutation,
  useDeleteProductMutation,
  useGetSingleProductQuery,
  useAllProductQuery,
} = apiSlice;
