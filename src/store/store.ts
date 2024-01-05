import { configureStore, findNonSerializableValue } from "@reduxjs/toolkit";
import toastSlice from "@store/toast/toastSlice";
import navbarSlice from "./navbar/navbarSlice";

const store = configureStore({
  reducer: {
    toast: toastSlice,
    navbar: navbarSlice,
  },
});

export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
