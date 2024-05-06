import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";



export type themeType= "light"| "dark"
type initialStateType={
    currentTheme: themeType
}

const initialState:initialStateType={
    currentTheme:"light"
}

const  themeSlice=createSlice({initialState,name:"themes", reducers:{
    toggleTheme:(state)=>{
        state.currentTheme=state.currentTheme==="dark"?"light":"dark"
    }
}})
export const  {toggleTheme}=  themeSlice.actions
export const selectTheme= (state:RootState)=>state.theme.currentTheme
export default themeSlice.reducer