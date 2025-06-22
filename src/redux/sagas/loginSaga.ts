import { call, put, takeLatest } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  LOGIN_DATA_REQUEST,
  LoginRequest,
  LoginResponse,
} from "../actions/loginAction";
import { Action } from "redux";

function fetchLoginApi(payload: LoginRequest) {
  const { email, password } = payload;
  return fetch("http://localhost:3001/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      Accept: "application/json,",
      "Content-Type": "application/json; charset=UTF-8",
      // 'Content-Length': Buffer.byteLength(data),
      // 'Cookie': cookies,
    },
  }).then((response) => response.json());
}

function* loginSaga({
  payload,
}: {
  type: string;
  payload: LoginRequest;
}) {
  try {
    const data: LoginResponse = yield call(fetchLoginApi, payload);
    yield put(loginSuccess(data));
  } catch (error: any) {
    yield put(loginFailure(error));
  }
}

export function* watchLoginSaga() {
  yield takeLatest(LOGIN_DATA_REQUEST, loginSaga);
}
