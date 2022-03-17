import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    background: "#bfb19f;",
    height: "64px",
  },
  watchIcon: {
    fontSize: "25px",
    marginRight: "5px",
  },
  levelText: {
    fontWeight: 700,
  },
  timer: {
    background: "#d7cbbc",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 5px",
    borderRadius: "10pt",
  },
}));
