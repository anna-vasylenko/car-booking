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

import { carsReducer } from "./cars/slice";
import { filterReducer } from "./filters/slice";
import { favoriteReducer } from "./favorite/slice";
import { modalReducer } from "./modal/slice";

const persistConfig = {
  key: "favorite",
  version: 1,
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, favoriteReducer);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favorite: persistedReducer,
    filter: filterReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
