import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
type initialStateType={
    payment_key:string,
    key_has_loaded:boolean
}
const initialState:initialStateType= {
payment_key:"",
key_has_loaded:false
}

const paymentSlice=createSlice({name:"payment", initialState,reducers:{
    setKey:(state, action)=>{
        state.payment_key= action.payload
    },
    loadKey:(state)=>{
        state.key_has_loaded=true;
    }
}})
export  const {setKey,loadKey}= paymentSlice.actions
export const selectKey= (state:RootState)=>state.payment.payment_key
export const select_key_has_loaded=(state:RootState)=>state.payment.key_has_loaded
export default paymentSlice.reducer