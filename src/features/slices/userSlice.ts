import { createSlice } from "@reduxjs/toolkit"

const initialState = {
        firstName: '',
        lastName: '',
        role: ['', '', '', ...''],
        login: '',
    
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        putFirstName: (state, action) => {
            return action.payload
        },
        putLastName: (state, action) => {
            return action.payload
        },
        putRole: (state, action) => {
            return action.payload
        },
        putLogin: (state, action) => {
            return action.payload
        }
        // putValue: (state, action) => {
        //     const {value, key} = action.payload;
        //     return {...state, [key]: value}
        // }
    }
})
export const { putFirstName, putLastName, putRole, putLogin } = userSlice.actions
// export const { putValue } = userSlice.actions
export default userSlice.reducer