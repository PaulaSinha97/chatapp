import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchFetchSuccess,
  fetchFriendFailure,
  FRIENDS_DATA_REQUEST,
} from "../actions/friendsAction";
import { UserResponse } from "../actions/userAction";

function fetchFriendsApi(token: string) {
  return fetch("http://localhost:3001/users/allFriends", {
    method: "GET",
    headers: {
      Accept: "application/json,",
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => response.json());
}

function* fetchSaga() {
  try {
    const token = sessionStorage.getItem("token") || "";
    const data: UserResponse[] = yield call(fetchFriendsApi, token);
    yield put(fetchFetchSuccess(data));
  } catch (error: any) {
    yield put(fetchFriendFailure(error));
  }
}

export function* watchFriendsFetchSaga() {
  yield takeLatest(FRIENDS_DATA_REQUEST, fetchSaga);
}
