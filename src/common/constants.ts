export const SOCKET_URL = "wss://hometask.eg1236.com/game1/";

export const defaultCell = {
  isMine: false,
  isEmpty: false,
  value: 0,
  orderType: "odd",
  position: [0, 0],
};

export const digitToLevel: { [key: number]: string } = {
  1: "Easy",
  2: "Medium",
  3: "Hard",
  4: "Extra Hard",
};
