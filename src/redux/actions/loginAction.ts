export const LOGIN_DATA_REQUEST = "LOGIN_DATA_REQUEST";
export const LOGIN_DATA_SUCCESS = "LOGIN_DATA_SUCCESS";
export const LOGIN_DATA_FAILURE = "LOGIN_DATA_FAILURE";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export const loginRequest = (payload: LoginRequest) => ({
  type: LOGIN_DATA_REQUEST,
  payload,
});
export const loginSuccess = (data: LoginResponse) => ({
  type: LOGIN_DATA_SUCCESS,
  payload: data,
});
export const loginFailure = (error: string) => ({
  type: LOGIN_DATA_FAILURE,
  payload: error,
});
