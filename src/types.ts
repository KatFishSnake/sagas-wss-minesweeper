import store from "./store";
import { defaultCell } from "./constants";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type GameMapType = Array<Array<typeof defaultCell>>;
