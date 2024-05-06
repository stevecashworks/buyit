import { configureStore } from "@reduxjs/toolkit";
import userslice from "./users/userslice";
import cartSlice from "./cart/cartSlice";
import themeSlice from "./theme/themeSlice";
import paymentSlice from "./payment/paymentSlice";
import rates from "./rates/rates";
import productSlice from "../state/products/productSlice"


const store=configureStore({
    reducer:{
        user:userslice,
        cart:cartSlice,
        theme:themeSlice,
        payment:paymentSlice,
        rates:rates,
        products:productSlice

    }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
export default store