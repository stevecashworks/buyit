import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type user_details_type = {
  _id: string;
  userType: "vendor" | "customer" | "admin" | "none";
  userName:string
};

interface defaultUser {
  is_logged_in: boolean;
  userDetails: user_details_type;
}
const initialState: defaultUser = {
  is_logged_in: false,
  userDetails: {
    _id: "",
    userType: "none",
    userName:""
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // login
    log_user_in: (state, action) => {
      state.is_logged_in = true;
      state.userDetails = action.payload;
    },
    // logout
    log_user_out: (state) => {
      // i temporarily assigned state to the current state to bypass typescripts warning
      state = state;
      state=initialState
    },
  },
});
export const  {log_user_in,log_user_out}=userSlice.actions
export const selectIsLogged=(state:RootState)=>state.user.is_logged_in
export default userSlice.reducer;
