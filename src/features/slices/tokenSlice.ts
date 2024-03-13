import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    token: ''
}

const tokenSlice = createSlice({ 
    name: 'token',
    initialState,
    reducers: {
        putToken: (state, action) => {
            return action.payload
        }
    }
})

export const { putToken } = tokenSlice.actions
export default tokenSlice.reducer