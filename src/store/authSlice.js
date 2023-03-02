import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "Auth",
  initialState: {
    auth:false
  },
  reducers: {
    signInvalidUser: (state, action) => {
          state.auth= true
    },
    signOutValidUser: (state, action) => {
          state.auth= false
    },

  },
});

export const { signInvalidUser, signOutValidUser} = slice.actions;
export default slice.reducer;