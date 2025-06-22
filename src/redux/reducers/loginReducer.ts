import {
  LOGIN_DATA_FAILURE,
  LOGIN_DATA_REQUEST,
  LOGIN_DATA_SUCCESS,
  LoginResponse,
} from "../actions/loginAction";

interface FetchState {
  loading: boolean;
  data: LoginResponse;
  error: string | null;
}

const initialState: FetchState = {
  loading: false,
  data: { token: "" },
  error: null,
};

export const loginReducer = (state = initialState, action: any): FetchState => {
  switch (action.type) {
    case LOGIN_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case LOGIN_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
