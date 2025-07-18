import { configureStore } from '@reduxjs/toolkit';
import errorReducer from '../../controller/feature/error/store/errorSlice'

const store = configureStore({
    reducer: {
        error: errorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;