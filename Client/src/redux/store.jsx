import { configureStore } from '@reduxjs/toolkit'
import alertSlice from "./alertSlice"

const store = configureStore({
  reducer: {
    alerts: alertSlice,
  },
});

export default store;
