import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from './slices/expenseSlice'
import userReducer from './slices/userSlice'
import {transactionApi} from './slices/apiSlice'

 const store = configureStore({
    reducer:{
        expense: expenseReducer,
        user : userReducer,
        [transactionApi.reducerPath]: transactionApi.reducer,
      },  
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(transactionApi.middleware),
})

export default store