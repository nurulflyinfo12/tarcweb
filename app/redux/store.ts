import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from "./slice/roomsSlice";
import applicationReducer from "./slice/applicationSlice"

export const store = configureStore({
  reducer: {
    rooms: roomsReducer,
    application: applicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;