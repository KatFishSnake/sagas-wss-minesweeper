import { useSelector, useDispatch } from "react-redux";
import { useStopwatch } from "react-timer-hook";

import type { RootState } from "../types";
import { resetGame } from "../mineSweeper/mineSweeperAction";
import { digitToLevel } from "../common/constants";
import generateStyles from "./mineSweeperHeaderStyles";
import generateCommonStyles from "../common/styles";
import { useEffect } from "react";

const MineSweeperHeader = () => {
  const dispatch = useDispatch();
  const styles = generateStyles();
  const commonStyles = generateCommonStyles();
  const levelValue = useSelector((state: RootState) => state.levelValue);
  const isGameOver = useSelector((state: RootState) => state.isGameOver);
  const { seconds, minutes, pause } = useStopwatch({
    autoStart: true,
  });

  const handleLevelReset = () => {
    dispatch(resetGame());
  };

  useEffect(() => {
    if (isGameOver) pause();
  }, [isGameOver]);

  return (
    <div className={styles.main}>
      <p className={styles.levelText}>
        Level: {levelValue && digitToLevel[levelValue]}
      </p>
      <p className={styles.timer}>
        <span className={styles.watchIcon}>⏱</span> <span>{minutes}</span>:
        <span>{seconds}</span>
      </p>
      <button className={commonStyles.button} onClick={handleLevelReset}>
        {isGameOver ? "Try again!" : "Reset"}
      </button>
    </div>
  );
};

export default MineSweeperHeader;
