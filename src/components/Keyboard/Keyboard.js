import React from "react";
import styles from "./Keyboard.module.scss";
import Row from "../Row/Row";

const Keyboard = () => {
  return (
    <div className={styles.wrapper}>
      <Row row={1} />
      <Row row={2} />
      <Row row={3} />
      <Row row={4} />
    </div>
  );
};

export default Keyboard;
