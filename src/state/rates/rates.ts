import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type initialStateType={
    rates_have_loaded:boolean,
    rates:{
        [key:string]:number
    }
}

const initialState:initialStateType={
    rates:{},
    rates_have_loaded:false,
}

const ratesReducer=createSlice({name:"rates", initialState,reducers:{
    setRates:(state,action)=>{
        state.rates= action.payload
    },
    loadRates:(state)=>{
        state.rates_have_loaded=true
    }
}})

export const {setRates, loadRates}=ratesReducer.actions
export const selectRates= (state:RootState)=>state.rates.rates
export const select_rates_have_loaded=(state:RootState)=>state.rates.rates_have_loaded
export default ratesReducer.reducer