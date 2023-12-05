import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import Books from "../reducer/static/Books";
import { api } from "../reducer/async/Allbooks";


export const store =  configureStore ({
    reducer: {
        counter: BookSlice,
        todo: Books,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(api.middleware)
});