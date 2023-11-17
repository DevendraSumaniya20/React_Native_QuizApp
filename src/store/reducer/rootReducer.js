import {combineReducers} from '@reduxjs/toolkit';
import themeReducer from '../reducerSlice/themeSlice';
import clearReducer from '../reducerSlice/clearSlice';

const rootReducer = combineReducers({
  theme: themeReducer,
  clear: clearReducer,
});

export default rootReducer;
