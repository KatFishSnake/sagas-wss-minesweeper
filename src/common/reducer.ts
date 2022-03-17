import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import {
  updateMapAction,
  gameOver,
  resetGame,
} from "../mineSweeper/mineSweeperAction";
import {
  createLevelAction,
  createLevelPendingAction,
} from "../startUp/startUpAction";
import { GameMapType } from "../types";

type StateType = {
  levelValue: null | number;
  levelCreated: null | boolean;
  isGameOver: boolean;
  map: null | GameMapType;
};

export const INITIAL_STATE: StateType = {
  levelValue: null,
  levelCreated: null,
  isGameOver: false,
  map: null,
};

const commonReducer = createReducer(INITIAL_STATE, (builder) => {
  builder.addCase(resetGame.type, (state) => {
    state.levelValue = INITIAL_STATE.levelValue;
    state.levelCreated = INITIAL_STATE.levelCreated;
    state.isGameOver = INITIAL_STATE.isGameOver;
    state.map = INITIAL_STATE.map;
  });

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

  builder.addCase(gameOver.type, (state) => {
    state.isGameOver = true;
  });
});

export default commonReducer;
