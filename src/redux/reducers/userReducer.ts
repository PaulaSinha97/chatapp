import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  UserResponse,
} from "../actions/userAction";

interface FetchState {
  loading: boolean;
  data: UserResponse;
  error: string | null;
}

const initialState: FetchState = {
  loading: false,
  data: { id: "", name: "", email: "", password: "" },
  error: null,
};

export const fetchReducer = (state = initialState, action: any): FetchState => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
