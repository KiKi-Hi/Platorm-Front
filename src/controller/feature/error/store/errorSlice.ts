import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ErrorState = {
    hasError: boolean;
    errorMessage: string | null;
};

const initialState: ErrorState = {
    hasError: false,
    errorMessage: null,
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string | null>) => {
            state.hasError = !!action.payload;
            state.errorMessage = action.payload;
        },
        clearError: (state) => {
            state.hasError = false;
            state.errorMessage = null;
        },
    },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;