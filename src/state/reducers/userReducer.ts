import { createSlice } from "@reduxjs/toolkit";

import { IUser } from "../../models/user";

const initialValue: IUser = {
  firstName: "",
  lastName: "",
  age: "",
  email: "",
  testCategory: "",
  testDifficulty: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialValue },
  reducers: {
    register: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { register } = userSlice.actions;

export default userSlice.reducer;
