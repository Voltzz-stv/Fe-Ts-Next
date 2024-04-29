import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./features/filter";
// import { useApi } from "./services/useApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import dateReducer from "./features/date";

const store = configureStore({
  reducer: {
    filters: filterReducer,
    dates: dateReducer,
    // [useApi.reducerPath]: useApi.reducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({}).concat(useApi.middleware),
});

export default store;

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
