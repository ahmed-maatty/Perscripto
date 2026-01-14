import { createSlice } from "@reduxjs/toolkit";

type appointmentType = {
  id: string,
  patient_name: string,
  doctor_name: string,
  time: string
}

interface Appointments {
  appointments: appointmentType[] | null
}


const initialState: Appointments = {
  appointments: []
}

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointment: (state, action) => {
      state.appointments = action.payload
    }
  }
})


export const { setAppointment } = appointmentSlice.actions;
export default appointmentSlice.reducer;