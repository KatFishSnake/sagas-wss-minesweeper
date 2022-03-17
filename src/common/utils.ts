import { defaultCell } from "./constants";
import { GameMapType } from "../types";

const determineOrderType = (row: number, col: number): "even" | "odd" => {
  if (row % 2 === 1) return col % 2 === 1 ? "even" : "odd";
  if (row % 2 === 0) return col % 2 === 1 ? "odd" : "even";
  return "even";
};

export const transformMapToList = (mapString: string) => {
  const parsedMap: GameMapType = [];
  const list = mapString.replace("map:\n", "").split("\n");
  list.forEach((group: string, rowIndex: number) => {
    // Example of row coming from api 3001*2□
    const parsedGroup = group
      .split("")
      .map((char: string, colIndex: number) => {
        if (char === "□")
          return {
            ...defaultCell,
            isEmpty: true,
            orderType: determineOrderType(rowIndex, colIndex),
            position: { x: colIndex, y: rowIndex },
          };
        else if (char === "*")
          return {
            ...defaultCell,
            isMine: true,
            orderType: determineOrderType(rowIndex, colIndex),
            position: { x: colIndex, y: rowIndex },
          };
        else
          return {
            ...defaultCell,
            value: Number(char),
            orderType: determineOrderType(rowIndex, colIndex),
            position: { x: colIndex, y: rowIndex },
          };
      });
    parsedMap.push(parsedGroup);
  });

  return parsedMap;
};
