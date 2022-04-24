import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
    'x-rapidapi-host': "coinranking1.p.rapidapi.com",
    'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};
const baseUrl="https://coinranking1.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        // Note: To access this endpoint you need premium plan
        getCryptos: builder.query({
            query: () => createRequest('/coins'),
        }),
    }),
});

export const {
    useGetCryptosQuery,
} = cryptoApi;