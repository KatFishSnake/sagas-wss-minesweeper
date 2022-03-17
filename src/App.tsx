import { CssBaseline, Container } from "@material-ui/core";
import { useSelector } from "react-redux";

import type { RootState } from "./types";

import MineSweeper from "./mineSweeper/MineSweeper";
import StartUp from "./startUp/StartUp";

export default function App() {
  const isLevelCreated = useSelector((state: RootState) => state.levelCreated);
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      {isLevelCreated ? <MineSweeper /> : <StartUp />}
    </Container>
  );
}
