import { configureStore } from "@reduxjs/toolkit";
import bookListSlice from "./features/bookList/bookListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      bookList: bookListSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
