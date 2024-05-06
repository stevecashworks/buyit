import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type initialStateType={
    rates:{
        [key:string]:number
    }
}

const initialState:initialStateType={
    rates:{}
}

const ratesReducer=createSlice({name:"rates", initialState,reducers:{
    setRates:(state,action)=>{
        state.rates= action.payload
    }
}})

export const {setRates}=ratesReducer.actions
export const selectRates= (state:RootState)=>state.rates.rates
export default ratesReducer.reducer