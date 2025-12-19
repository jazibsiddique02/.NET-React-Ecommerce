import { configureStore, legacy_createStore } from "@reduxjs/toolkit";
import {
  counterReducer,
  counterSlice,
} from "../../features/contact/counterReducer";
import { useDispatch, useSelector } from "react-redux";
import { catalogApi } from "../../features/catalog/CatalogApi";
import { uiSlice } from "../layout/uiSlice";

export function configureTheStore() {
  return legacy_createStore(counterReducer);
}

export const store = configureStore({
  reducer: {
    [catalogApi.reducerPath]: catalogApi.reducer,
    counter: counterSlice.reducer,
    ui: uiSlice.reducer,
  },
  middleware: (getdefaultmiddleware) =>
    getdefaultmiddleware().concat(catalogApi.middleware),
});

export type AppStore = typeof store;

export type AppDispatch = AppStore["dispatch"];

export type RootState = ReturnType<AppStore["getState"]>;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export const useAppSelector = useSelector.withTypes<RootState>();
