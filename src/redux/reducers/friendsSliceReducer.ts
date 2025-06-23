import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserResponse } from "../actions/userAction";

export const fetchAllYourFriends = createAsyncThunk("users/allFriends", () => {
  const data = fetch("http://localhost:3001/users/allFriends", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
  }).then((response) => response.json());
  return { action: "", data };
});

export interface FriendsResponse {
  data: UserResponse[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | undefined | null;
}

const friendsSlice = createSlice({
  name: "friends",
  initialState: {
    data: [],
    loading: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  } as FriendsResponse,
  reducers: {
    // Example of a synchronous action
    addPost: (state, action) => {
      state.data.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllYourFriends.pending, (state) => {
        state.loading = "loading";
      })
      // .addCase(fetchAllYourFriends.fulfilled, (state, action) => {
      //   state.loading = "succeeded";
      //   state.data = action.payload;
      // })
      .addCase(fetchAllYourFriends.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addPost } = friendsSlice.actions;
export default friendsSlice.reducer;
