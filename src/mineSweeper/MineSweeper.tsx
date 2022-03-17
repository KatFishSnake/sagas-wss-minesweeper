import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {} from "./mineSweeperAction";
import { makeStyles } from "@material-ui/core";
import { RootState } from "../types";

const digitToLevel: { [key: number]: string } = {
  1: "Simple",
  2: "Medium",
  3: "Hard",
  4: "Extra Hard",
};

const generateStyles = makeStyles({
  button: {
    color: "red",
  },
});

const MineSweeper = () => {
  // const dispatch = useDispatch();
  // const styles = generateStyles();
  const levelMap = useSelector((state: RootState) => state.map);
  const levelValue = useSelector((state: RootState) => state.levelValue);

  return (
    <div>
      <p>Mine sweeper game</p>
      <p>Selected level: {levelValue && digitToLevel[levelValue]}</p>
      <div>
        {levelMap?.map((o: any) => {
          return <div>{o.map((i: any) => ".")}</div>;
        })}
      </div>
    </div>
  );
};

export default MineSweeper;
