import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  button: {
    border: 0,
    backgroundColor: "#EC4E20",
    padding: "10px 20px",
    borderRadius: "4pt",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#D62413",
    },
  },
}));
