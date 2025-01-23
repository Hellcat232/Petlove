import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/slice";
import newsReducer from "./news/slice";
import friendsReducer from "./friends/slice";
import noticesReducer from "./notices/slice";
import citiesReducer from "./cities/slice";

const authConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const noticesConfig = {
  key: "notices",
  storage,
  whitelist: ["favoriteList"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    news: newsReducer,
    friends: friendsReducer,
    cities: citiesReducer,
    notices: persistReducer(noticesConfig, noticesReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
