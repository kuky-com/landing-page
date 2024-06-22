import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createUser } from '../services/api'

interface UserState {
    currentUser: any | null
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
    error: string | null
}

const initialState: UserState = {
    currentUser: null,
    status: 'idle',
    error: null,
}

export const registerUser = createAsyncThunk(
    'users/register',
    async (userData: { firstName: string; lastName: string; email: string }, { rejectWithValue }) => {
        try {
            const response = await createUser(userData)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<any>) => {
                state.status = 'succeeded'
                state.currentUser = action.payload
            })
            .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default userSlice.reducer