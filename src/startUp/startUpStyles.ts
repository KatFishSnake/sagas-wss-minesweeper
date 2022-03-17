import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  main: {
    paddingTop: "30vh",
  },
  title: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "19px",
    },
  },
  subtitle: {
    textAlign: "center",
    color: "grey",
    fontWeight: 500,
  },
  icon: {
    fontSize: "32px",
    margin: "0 5px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
}));
