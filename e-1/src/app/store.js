import { configureStore } from '@reduxjs/toolkit';
import Reducers from '../reducers';

// const initialState = {
//   temp: 0,
// }

export const store = configureStore({
  reducer:Reducers,
  // preloadedState:TempReducer,
  // reducer: (state) => {
  //   return state;
  // },
});
