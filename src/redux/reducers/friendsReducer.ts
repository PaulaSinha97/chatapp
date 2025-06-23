import {
  FRIENDS_DATA_FAILURE,
  FRIENDS_DATA_REQUEST,
  FRIENDS_DATA_SUCCESS,
} from "../actions/friendsAction";
import { UserResponse } from "../actions/userAction";

interface FriendsState {
  loading: boolean;
  data: UserResponse[];
  error: string | null;
}

const initialState: FriendsState = {
  loading: false,
  data: [],
  error: null,
};

export const friendsReducer = (
  state = initialState,
  action: any
): FriendsState => {
  switch (action.type) {
    case FRIENDS_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FRIENDS_DATA_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FRIENDS_DATA_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};
