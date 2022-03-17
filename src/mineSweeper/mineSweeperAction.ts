import { createAction } from "@reduxjs/toolkit";

import { GameMapType } from "../types";

export const updateMapAction = createAction<GameMapType>("update-map");
export const triggerUpdateMapAction = createAction("trigger-map-update");

export const openCellAction =
  createAction<{ x: number; y: number }>("open-cell");

export const gameOver = createAction("game-over");
export const resetGame = createAction("reset-game");
