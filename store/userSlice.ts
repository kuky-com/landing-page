import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { createUser } from '../services/api'

interface CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    recaptchaToken: string;
}

interface User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

interface UserState {
    currentUser: User | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: UserState = {
    currentUser: null,
    status: 'idle',
    error: null,
}

export const registerUser = createAsyncThunk<User, CreateUserDto, { rejectValue: string }>(
    'users/register',
    async (userData: CreateUserDto, { rejectWithValue }) => {
        try {
            const response = await createUser(userData)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.message || 'An error occurred')
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
            .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.status = 'succeeded'
                state.currentUser = action.payload
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload || 'An error occurred'
            })
    },
})

export default userSlice.reducer