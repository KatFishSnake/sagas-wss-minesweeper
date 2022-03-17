import { useSelector, useDispatch } from "react-redux";

import type { RootState, CellType } from "../types";
import { openCellAction } from "../mineSweeper/mineSweeperAction";
import generateStyles from "./mineSweeperCellStyles";

type PropsType = {
  cell?: CellType;
};

const MineSweeperHeader = ({ cell }: PropsType) => {
  const dispatch = useDispatch();
  const isGameOver = useSelector((state: RootState) => state.isGameOver);

  if (!cell) return null;

  const styles = generateStyles({ cell });

  const handleCellClick = () => {
    if (isGameOver || !cell.isEmpty) return;

    dispatch(openCellAction({ x: cell.position.x, y: cell.position.y }));
  };

  return (
    <div
      key={`cell-${cell.position.x}-${cell.position.y}`}
      onClick={handleCellClick}
      className={styles.main}
    >
      {cell.isMine ? "💣" : null}
      {cell.isEmpty || cell.isMine ? null : cell.value}
    </div>
  );
};

export default MineSweeperHeader;
