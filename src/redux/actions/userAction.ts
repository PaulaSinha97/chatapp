export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export interface UserResponse {
  id: string;
  name: string;
  email: string;
  password: string;
}

export const fetchRequest = () => ({ type: FETCH_DATA_REQUEST });
export const fetchSuccess = (data: UserResponse) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const fetchFailure = (error: string) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
