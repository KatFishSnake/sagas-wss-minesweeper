import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core";

import { createLevelPendingAction } from "./startUpAction";

const generateStyles = makeStyles({
  button: {
    color: "red",
  },
  textbox: {},
});

const StartUp = () => {
  const dispatch = useDispatch();
  const styles = generateStyles();

  const handleLevelSelection = (level: number) => {
    console.log(level);
    dispatch(createLevelPendingAction(level));
  };

  return (
    <div>
      <button className={styles.button} onClick={() => handleLevelSelection(1)}>
        1
      </button>
      <button className={styles.button} onClick={() => handleLevelSelection(2)}>
        2
      </button>
      <button className={styles.button} onClick={() => handleLevelSelection(3)}>
        3
      </button>
      <button className={styles.button} onClick={() => handleLevelSelection(4)}>
        4
      </button>
    </div>
  );
};

export default StartUp;
