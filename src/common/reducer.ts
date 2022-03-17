import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { updateMapAction } from "../mineSweeper/mineSweeperAction";
import {
  createLevelAction,
  createLevelPendingAction,
} from "../startUp/startUpAction";
import { GameMapType } from "../types";

type StateType = {
  levelValue: null | number;
  levelCreated: null | boolean;
  map: null | GameMapType;
};

const INITIAL_STATE: StateType = {
  levelValue: null,
  levelCreated: null,
  map: null,
};

const commonReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(
    updateMapAction.type,
    (state, { payload: newMap }: PayloadAction<GameMapType>) => {
      state.map = newMap;
    }
  );

  builder.addCase(
    createLevelPendingAction.type,
    (state, { payload: newLevel }: PayloadAction<number>) => {
      state.levelValue = newLevel;
    }
  );

  builder.addCase(createLevelAction.type, (state) => {
    state.levelCreated = true;
  });
});

export default commonReducer;
