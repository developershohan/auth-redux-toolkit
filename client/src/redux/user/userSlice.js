import {createSlice} from "@reduxjs/toolkit"

// create auth slice
const userSlice = createSlice({
    name: "user",
    initialState:{
        user:null,
        message:null,
        error:false,
        loader: false
    },
    reducers: {
        signInPending: (state)=>{
            state.loader = true

        },
        signInSuccess:(state,action)=>{
            state.loader = false,
            state.user =  action.payload,
            state.error = false
        },
        signInRejected:(state,action)=>{
            state.loader = false,
            state.error = action.payload
        }
    },
    extraReducers:()=>{}
})

// selector

// actions
export const {signInPending,signInSuccess,signInRejected}= userSlice.actions

// reducer
export default userSlice.reducer