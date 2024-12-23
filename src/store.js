import { configureStore } from "@reduxjs/toolkit";
import patientsReducer from "./features/patient";

const store = configureStore({
  reducer: {
    patients: patientsReducer,
  },
});

export default store;
