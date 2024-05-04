import { configureStore } from "@reduxjs/toolkit";
import userslice from "./users/userslice";
import cartSlice from "./cart/cartSlice";


const store=configureStore({
    reducer:{
        user:userslice,
        cart:cartSlice
    }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
export default store