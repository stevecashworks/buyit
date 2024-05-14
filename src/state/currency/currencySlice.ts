import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type initialStateType={
    currency_has_loaded:boolean
    currentCurrency:string
}


const initialState:initialStateType={
    currency_has_loaded:false,
    currentCurrency:""
} 

const currencySlice=createSlice({name:"currency", initialState, reducers:{
    setCurrency:(state,action)=>{
        state.currentCurrency=action.payload
    },
    loadCurrency:(state)=>{
        state.currency_has_loaded=true;
    }
}})
export const {setCurrency, loadCurrency}= currencySlice.actions
export const selectCurrency=(state:RootState)=>state.currency.currentCurrency
export const select_currency_has_loaded=(state:RootState)=>state.currency.currency_has_loaded
export default currencySlice.reducer