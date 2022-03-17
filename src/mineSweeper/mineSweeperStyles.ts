import { makeStyles } from "@material-ui/core";

// TODO variables
export default makeStyles(() => ({
  main: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  gameMap: {
    overflow: "scroll",
    height: "calc(100vh - 64px)",
  },
  watchIcon: {
    fontSize: "28px",
    marginRight: "5px",
  },
  innerContainerGrid: {
    "& .ReactVirtualized__Grid__innerScrollContainer": {
      margin: "0 auto",
    },
  },
}));
