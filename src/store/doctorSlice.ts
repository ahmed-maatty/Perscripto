import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Doctor = {
  id: string,
  username: string,
  email: string,
  degree: string,
  description: string,
  experience: string,
  fee: string,
  appointments: null | [],
  image: string,
  speciality: string
}

interface stateType {
  doctors: Doctor[];
  doctor: Doctor | null;
}

const initialState: stateType = {
  doctors: [],
  doctor: null
}

const doctorSlice = createSlice({
  name: "Doctors",
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<Doctor[]>) => {
      state.doctors = action.payload;
    },
    setDoctor: (state, action: PayloadAction<Doctor>) => {
      state.doctor = action.payload
    }
  }
});


export const { setDoctor, setDoctors } = doctorSlice.actions;
export default doctorSlice.reducer