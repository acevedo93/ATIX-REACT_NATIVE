//import Reducers

import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, combineReducers, Dispatch, Middleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {
  configureStore,
  getDefaultMiddleware,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import {bottomSheetSlice} from './slices/bottomSheet';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  bottomSheet: bottomSheetSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  devTools: true,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = Dispatch<AnyAction> &
  ThunkDispatch<RootState, null, AnyAction>;