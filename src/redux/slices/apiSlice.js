import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const transactionApi = createApi({
  reducerPath: "transactions",
  tagTypes: ["transactions"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expenseapr.onrender.com/api/transactions/",
  }),
  endpoints: (builder) => ({
    getAllTransactions: builder.query({
      query: (userId) => `get/${userId}`,
      providesTags: ["transactions"],
    }),
    addTransaction: builder.mutation({
      query: (transaction) => ({
        url: "add/",
        method: "post",
        body: transaction,
      }),
      invalidatesTags: ["transactions"],
    }),
    deleteTransaction: builder.mutation({
      query: (transactionId) => ({
        url: `/delete/${transactionId}`,
        method: "delete",
      }),
      invalidatesTags: ["transactions"],
    }),
    deleteAllTransaction: builder.mutation({
      query: (userId) => ({
        url: `/transaction/${userId}`,
        method: "delete",
      }),
      invalidatesTags: ["transactions"],
    }),
  }),
});

export const {
  useAddTransactionMutation,
  useGetAllTransactionsQuery,
  useDeleteTransactionMutation,
  useDeleteAllTransactionMutation
} = transactionApi;
