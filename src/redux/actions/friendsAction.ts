import { UserResponse } from "./userAction";

export const FRIENDS_DATA_REQUEST = "Friends_DATA_REQUEST";
export const FRIENDS_DATA_SUCCESS = "Friends_DATA_SUCCESS";
export const FRIENDS_DATA_FAILURE = "Friends_DATA_FAILURE";

export const fetchFriendRequest = () => ({ type: FRIENDS_DATA_REQUEST });
export const fetchFetchSuccess = (data: UserResponse[]) => ({
  type: FRIENDS_DATA_SUCCESS,
  payload: data,
});

export const fetchFriendFailure = (error: string) => ({
  type: FRIENDS_DATA_FAILURE,
  payload: error,
});
