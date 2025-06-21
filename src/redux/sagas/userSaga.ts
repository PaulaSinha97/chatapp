import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchSuccess,
  fetchFailure,
  FETCH_DATA_REQUEST,
} from "../actions/userAction";
export interface UserResponse {
  name: string;
  email: string;
  password: string;
}

function fetchApi() {
  return fetch("http://localhost:3001/users", {
    method: "GET",
    headers: {
      Accept: "application/json,",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4NTZiYWQ3Y2E1NzNiMDMwYWFkOThiZCIsImlhdCI6MTc1MDUzMjY3NSwiZXhwIjoxNzUwNTM2Mjc1fQ.leLbpZFgwzBCiouCqJGTNgy5qvlDfs2f8tWcq5HIICk",
      // 'Content-Length': Buffer.byteLength(data),
      // 'Cookie': cookies,
    },
  }).then((response) => response.json());
}

function* fetchSaga() {
  try {
    const data: UserResponse = yield call(fetchApi);
    yield put(fetchSuccess(data));
  } catch (error: any) {
    yield put(fetchFailure(error));
  }
}

export function* watchFetchSaga() {
  yield takeLatest(FETCH_DATA_REQUEST, fetchSaga);
}
