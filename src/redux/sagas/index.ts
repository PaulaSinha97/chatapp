import { fork } from "redux-saga/effects";
import { watchFetchSaga } from "./userSaga";
import { watchLoginSaga } from "./loginSaga";

// const sagaMiddleware = createSagaMiddleware();

// export const store = configureStore({
//   reducer: {
//     rootReducer: rootReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// sagaMiddleware.run(watchFetchSaga);

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export function* root() {
  yield fork(watchFetchSaga);
  yield fork(watchLoginSaga);
}
