import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "@store/auth/authReducer";

const rootReducer = combineReducers({
  authState: authReducer,
});

export default rootReducer;
