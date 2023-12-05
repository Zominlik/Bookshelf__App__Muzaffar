import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "",
    }),
    endpoints: (builder) => ({
        getNews: builder.query({
            query: () => "/",
        }),
        })
    });

    export const { useGetNewsQuery } = api;