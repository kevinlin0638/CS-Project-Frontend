import {Action} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {configureStore} from '@reduxjs/toolkit'
import LoginSlice from '@/lib/features/login/loginSlice'

export const store = configureStore({
    reducer: {
        login: LoginSlice
    },
})

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
