import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import {configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  authReducer,
});

const createStoreWithMiddleware = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(),
  });

  return store;
};

const Store = createStoreWithMiddleware();

export default Store;
