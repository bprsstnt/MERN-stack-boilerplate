import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {}
    },
    reducers: {
        login: (state, action) => {
            return {...state.data, loginSuccess: action.payload}
        },
        register: (state, action) => {
            return {...state.data, register: action.payload }
        },
        auth: (state, action) => {
            return {...state.data, userData: action.payload }
        }
    }
})

export const { login, register, auth } = userSlice.actions;

export default userSlice.reducer;