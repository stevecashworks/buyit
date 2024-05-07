import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type initialStateType={
    currentCurrency:string
}


const initialState:initialStateType={
    currentCurrency:""
} 

const currencySlice=createSlice({name:"currency", initialState, reducers:{
    setCurrency:(state,action)=>{
        state.currentCurrency=action.payload
    }
}})
export const {setCurrency}= currencySlice.actions
export const selectCurrency=(state:RootState)=>state.currency.currentCurrency
export default currencySlice.reducer