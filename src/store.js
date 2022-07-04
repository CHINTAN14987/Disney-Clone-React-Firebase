import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import userReducer from "./features/userSlice";

export default configureStore({
  reducer: {
    movie: movieReducer,
    user: userReducer,
  },
});
