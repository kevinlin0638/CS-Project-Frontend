import {createSlice} from '@reduxjs/toolkit'
import {RootState} from '@/lib/store/store'
import {UploadFile} from 'antd'

export interface UploadState {
    uploadList: UploadFile[]
    prompt: string
    shape: string
    loading: boolean
    completed: string
}

const initialState: UploadState = {
    uploadList: [],
    prompt: '',
    shape: 'Strong',
    loading: false,
    completed: ''
}

export const uploadSlice = createSlice({
    name: 'upload',
    initialState,
    reducers: {
        setUploadList(state, action) {
            state.uploadList = action.payload
        },
        setPrompt(state, action) {
            state.prompt = action.payload
        },
        setShape(state, action) {
            state.shape = action.payload
        },
        setLoading(state, action) {
            state.loading = action.payload
        },
        setCompleted(state, action) {
            state.completed = action.payload
        }
    },
})

export const {
    setUploadList,
    setPrompt,
    setShape,
    setLoading,
    setCompleted,
} = uploadSlice.actions

export const selectUploadList = (state: RootState) => state.upload.uploadList
export const selectPrompt = (state: RootState) => state.upload.prompt
export const selectShape = (state: RootState) => state.upload.shape
export const selectLoading = (state: RootState) => state.upload.loading
export const selectCompleted = (state: RootState) => state.upload.completed

export default uploadSlice.reducer;
