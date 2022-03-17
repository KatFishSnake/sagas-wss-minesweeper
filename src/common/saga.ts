import { take, put, call, fork } from "redux-saga/effects";
import { Action } from "redux";
import { eventChannel } from "redux-saga";
import { Channel } from "@redux-saga/types";
import { w3cwebsocket as WebSocketType } from "websocket";

import { SOCKET_URL } from "./constants";
import { transformMapToList } from "./utils";
import {
  triggerUpdateMapAction,
  updateMapAction,
  openCellAction,
  gameOver,
} from "../mineSweeper/mineSweeperAction";
import {
  createLevelAction,
  createLevelPendingAction,
} from "../startUp/startUpAction";

export function* subscribe(ws: WebSocketType) {
  return eventChannel((emitter) => {
    ws.onmessage = (e: any) => {
      let value = null;
      try {
        value = e.data;
      } catch (e) {
        console.error(`Error Parsing Data:`, e);
      }

      switch (value) {
        case "new: OK":
          emitter(createLevelAction());
          emitter(triggerUpdateMapAction());
          break;
        case "open: OK":
          // When cell is opened and clear, refetch the map
          emitter(triggerUpdateMapAction());
          break;
        case "open: You lose": {
          emitter(triggerUpdateMapAction());
          emitter(gameOver());
          break;
        }
        default: {
          // Not ideal but would work for game in progress and end of the game
          if (value.includes("□") || value.includes("*")) {
            const parsedMapList = transformMapToList(value);
            emitter(updateMapAction(parsedMapList));

            // Not sure, but assume that user wins when there's no □
            if (!value.includes("□")) emitter(gameOver());
          }
          break;
        }
      }
    };

    return () => {
      ws.close();
    };
  });
}

function connect() {
  const ws = new WebSocket(SOCKET_URL);
  ws.onerror = (error) => {
    console.error("ERROR: ");
    console.dir(error);
  };
  return new Promise((resolve) => {
    ws.onopen = () => {
      resolve(ws);
      console.info("Opened Websocket");
    };
  });
}

function* read(ws: WebSocketType) {
  const channel: Channel<any> = yield call(subscribe, ws);
  while (true) {
    const action: Action<string> = yield take(channel);
    yield put(action);
  }
}

function* sendToWs(ws: WebSocketType, message: string) {
  ws.send(message);
}

function* write(ws: WebSocketType) {
  while (true) {
    const action: { type: string; payload: any } = yield take();
    let message = "help";
    switch (action.type) {
      case createLevelPendingAction.type:
        message = `new ${action.payload}`;
        break;
      case openCellAction.type:
        message = `open ${action.payload.x} ${action.payload.y}`;
        break;
      case triggerUpdateMapAction.type:
        message = "map";
        break;
      default:
        continue;
    }

    yield call(sendToWs, ws, message);
  }
}

export default function* watcherSaga(): any {
  const socket: WebSocketType = yield call(connect);
  yield fork(read, socket);
  yield fork(write, socket);
}
