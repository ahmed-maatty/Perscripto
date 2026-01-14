import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import doctorReducer from "./doctorSlice"
import appointmentsReducer from "./appointmentSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const userConfig = {
  key: "user",
  storage,
}

const doctorsConfig = {
  key: "doctor",
  storage
}

const appointmentConfig = {
  key: "appointments",
  storage
}

const persistedUserReducer = persistReducer(userConfig, userReducer);
const persistedDoctorReducer = persistReducer(doctorsConfig, doctorReducer);
const persistedAppointments = persistReducer(appointmentConfig, appointmentsReducer)


export const store = configureStore({
  reducer: {
    User: persistedUserReducer,
    Doctor: persistedDoctorReducer,
    Appointments: persistedAppointments
  }
});

export const presistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;