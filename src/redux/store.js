import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
// import rocketsReducer from './Rocket/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,

  },
});

export default store;
