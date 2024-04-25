import { createSlice } from "@reduxjs/toolkit";

type user_details_type = {
  id: string;
  user_type: "vendor" | "customer" | "admin" | "none";
};

interface defaultUser {
  is_logged_in: boolean;
  userDetails: user_details_type;
}
const initialState: defaultUser = {
  is_logged_in: false,
  userDetails: {
    id: "",
    user_type: "none",
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
      state = initialState;
    },
  },
});
export const  {log_user_in,log_user_out}=userSlice.actions

export default userSlice.reducer;
