import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./reducers"; // Combine your reducers here
import { root } from "./sagas/index"; // Combine your sagas here

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(root);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
