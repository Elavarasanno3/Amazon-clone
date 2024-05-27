import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    email: '',
    password: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.email = action.payload.email
            state.password = action.payload.password
        }
    }
})

export const { addUser } = UserSlice.actions

export default UserSlice.reducer
