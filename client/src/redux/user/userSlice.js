import {createSlice} from "@reduxjs/toolkit"

// create auth slice
const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
        message:null,
        error:null,
        loader: false
    },
    reducers: {},
    extraReducers:()=>{}
})

// selector

// actions
export const {}= userSlice.actions

// reducer
export default userSlice.reducer