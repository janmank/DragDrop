import {combineReducers} from 'redux';
import authReducer from './reducers/auth';
import {configureStore} from '@reduxjs/toolkit';
import projectsReducer from './reducers/projects';

const rootReducer = combineReducers({
  authReducer,
  projectsReducer,
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
