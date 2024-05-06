import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type initialStateType={
    payment_key:string
}
const initialState:initialStateType= {
payment_key:""
}

const paymentSlice=createSlice({name:"payment", initialState,reducers:{
    setKey:(state, action)=>{
        state.payment_key= action.payload
    }
}})
export  const {setKey}= paymentSlice.actions
export const selectKey= (state:RootState)=>state.payment.payment_key
export default paymentSlice.reducer