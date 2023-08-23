import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/apiSlice";
import cartSlice from "./features/cart/cartSlice";
import menuSlice from "./features/menu/menuSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice,
    menu: menuSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;
