import { configureStore } from "@reduxjs/toolkit";
import userslice from "./users/userslice";


const store=configureStore({
    reducer:{
        user:userslice
    }
})

export type RootState= ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch
export default store