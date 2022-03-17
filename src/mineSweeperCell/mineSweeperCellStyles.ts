import { makeStyles } from "@material-ui/core";
import type { CellType } from "../types";

// TODO variables
const getCellBackgroundColor = (cell: CellType) => {
  const colorConfig = {
    color: cell.orderType === "even" ? "#F78C16" : "#EC4E20",
    hoverColor: "#21EDB7",
  };

  if (!cell.isEmpty) {
    colorConfig.color = cell.orderType === "even" ? "#f9a251" : "#f17352";
    colorConfig.hoverColor = cell.orderType === "even" ? "#f9a251" : "#f17352";
  }

  if (!cell.isEmpty && cell.value === 0) {
    colorConfig.color = "#fad2ac";
    colorConfig.hoverColor = "#fad2ac";
  }

  return colorConfig;
};

export default makeStyles(() => ({
  main: ({ cell }: { cell: CellType }) => {
    const { color, hoverColor } = getCellBackgroundColor(cell);
    return {
      background: color,
      color: "white",
      textAlign: "center",
      flex: "1 0 20px",
      aspectRatio: "1 / 1",
      cursor: "pointer",
      fontWeight: "bold",
      "&:hover": {
        background: hoverColor,
      },
    };
  },
}));
