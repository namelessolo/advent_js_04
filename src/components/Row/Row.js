import React, { useContext } from "react";
import styles from "./Row.module.scss";
import Key from "../Key/Key";
import { KeyContext } from "../../providers/KeyProviders";

const Row = ({ row }) => {
  const { keysBoards } = useContext(KeyContext);
  return (
    <div className={styles.wrapper}>
      {keysBoards[row].values.map((keys, index) => {
        return <Key value={keys} key={keysBoards[row].dataSet[index]} dataSet={keysBoards[row].dataSet[index]}></Key>;
      })}
    </div>
  );
};

export default Row;
