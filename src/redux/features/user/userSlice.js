import { createSlice } from "@reduxjs/toolkit";

// Try to get user data from local storage
const storedUserData = JSON.parse(localStorage.getItem("userData"));

const initialState = storedUserData || {
  // email: "",
  phone: "",
  password: "",
  role: "",
  message: "",
  // isLoading: false
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.phone = action.payload.phone;
      state.password = action.payload.password;
      state.role = action.payload.role;
      state.message = action.payload.message;

      // Save user data to local storage
      localStorage.setItem("userData", JSON.stringify(state));
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
