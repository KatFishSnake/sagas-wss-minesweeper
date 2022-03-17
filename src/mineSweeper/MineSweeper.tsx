import { useSelector } from "react-redux";
import { Grid, AutoSizer } from "react-virtualized";

import type { RootState } from "../types";
import MineSweeperHeader from "../mineSweeperHeader/MineSweeperHeader";
import MineSweeperCell from "../mineSweeperCell/MineSweeperCell";
import generateStyles from "./mineSweeperStyles";

const MineSweeper = () => {
  const styles = generateStyles();
  const levelMap = useSelector((state: RootState) => state.map);

  if (!levelMap) return null;

  const cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => (
    <div key={key} style={style}>
      <MineSweeperCell cell={levelMap?.[rowIndex][columnIndex]} />
    </div>
  );

  return (
    <div className={styles.main}>
      <MineSweeperHeader></MineSweeperHeader>
      <div className={styles.gameMap}>
        <AutoSizer>
          {({ width, height }) => (
            <Grid
              cellRenderer={cellRenderer}
              columnCount={levelMap[0].length}
              columnWidth={25}
              height={height}
              rowCount={levelMap.length}
              rowHeight={25}
              width={width}
              overscanColumnCount={10}
              overscanRowCount={10}
              className={styles.innerContainerGrid}
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default MineSweeper;
