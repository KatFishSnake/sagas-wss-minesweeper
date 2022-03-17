import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import commonReducer from "./common/reducer";
import watcherSaga from "./common/saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: commonReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([logger, sagaMiddleware]),

  devTools: process.env.NODE_ENV !== "production",
});

// TODO:  Typecast = not good
sagaMiddleware.run(watcherSaga);

export default store;
