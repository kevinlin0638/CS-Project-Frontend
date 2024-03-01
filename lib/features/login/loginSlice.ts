import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '@/lib/store/store'

export interface LoginState {
    isLoading: boolean
}

const initialState: LoginState = {
    isLoading: true
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    },
})

export const {
    setIsLoading
} = loginSlice.actions

export const selectIsLoading = (state: RootState) => state.login.isLoading

export default loginSlice.reducer;
