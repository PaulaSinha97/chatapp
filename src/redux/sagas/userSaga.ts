import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSuccess,
  fetchFailure,
  FETCH_DATA_REQUEST,
  UserResponse,
} from "../actions/userAction";

function fetchUserApi(token: string) {
  return fetch("http://localhost:3001/users", {
    method: "GET",
    headers: {
      Accept: "application/json,",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
      // 'Content-Length': Buffer.byteLength(data),
      // 'Cookie': cookies,
    },
  }).then((response) => response.json());
}

function* fetchSaga() {
  try {
    const token = sessionStorage.getItem("token") || "";
    const data: UserResponse = yield call(fetchUserApi, token);
    yield put(fetchSuccess(data));
  } catch (error: any) {
    yield put(fetchFailure(error));
  }
}

export function* watchFetchSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchSaga);
}
