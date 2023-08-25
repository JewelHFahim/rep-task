import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import cartSlice from "./features/cart/cartSlice";
import menuSlice from "./features/menu/menuSlice";
import userSlice from "./features/user/userSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    menu: menuSlice,
    user: userSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
