import { defaultCell } from "./constants";
import { GameMapType } from "./types";

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
            position: [colIndex, rowIndex],
          };
        else if (char === "*")
          return {
            ...defaultCell,
            isMine: true,
            position: [colIndex, rowIndex],
          };
        else
          return {
            ...defaultCell,
            value: Number(char),
            position: [colIndex, rowIndex],
          };
      });
    parsedMap.push(parsedGroup);
  });

  return parsedMap;
};
