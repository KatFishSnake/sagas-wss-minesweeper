import { useDispatch } from "react-redux";
import { Container, useTheme, useMediaQuery } from "@material-ui/core";

import { createLevelPendingAction } from "./startUpAction";
import { digitToLevel } from "../common/constants";
import generateStyles from "./startUpStyles";
import generateCommonStyles from "../common/styles";

const StartUp = () => {
  const theme = useTheme();
  const matchesMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const dispatch = useDispatch();
  const styles = generateStyles();
  const commonStyles = generateCommonStyles();

  const handleLevelSelection = (level: number) => {
    console.log(level);
    dispatch(createLevelPendingAction(level));
  };

  return (
    <Container maxWidth="lg">
      <div className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.icon}>💣</span>
          Welcome to MineSweeper
          <span className={styles.icon}>💣</span>
        </h1>
        <h3 className={styles.subtitle}>Pick the complexity level:</h3>
        <div className={styles.buttonContainer}>
          <button
            className={commonStyles.button}
            onClick={() => handleLevelSelection(1)}
          >
            {digitToLevel[1]}
          </button>
          <button
            className={commonStyles.button}
            onClick={() => handleLevelSelection(2)}
          >
            {digitToLevel[2]}
          </button>
        </div>

        {/* Desktop only functionality, too large and heavy on mobile */}
        {/* TODO: optimize */}
        {matchesMobile ? null : (
          <>
            <h3 className={styles.subtitle}>
              🚧 Under development (unoptimized) 🚧
            </h3>
            <div className={styles.buttonContainer}>
              <button
                className={commonStyles.button}
                onClick={() => handleLevelSelection(3)}
              >
                {digitToLevel[3]}
              </button>
              <button
                className={commonStyles.button}
                onClick={() => handleLevelSelection(4)}
              >
                {digitToLevel[4]}
              </button>
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default StartUp;
