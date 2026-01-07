import { createSlice } from "@reduxjs/toolkit";

type User = {
  id: string,
  username: string,
  email: string,
  role: string
}

interface UserState {
  user: User | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    }
  }
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;