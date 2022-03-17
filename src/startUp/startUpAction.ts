import { createAction } from "@reduxjs/toolkit";

export const createLevelAction = createAction("create-level");

export const createLevelPendingAction = createAction<number>(
  "create-level-in-progress"
);
