import store from "./store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type CellType = {
  isMine: boolean;
  isEmpty: boolean;
  value: number;
  orderType: "odd" | "even";
  position: { x: number; y: number };
};

export type RowType = Array<CellType>;

export type GameMapType = Array<RowType>;
