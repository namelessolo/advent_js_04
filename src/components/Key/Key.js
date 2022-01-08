import React, { useContext } from "react";
import styles from "./Key.module.scss";
import { KeyContext } from "../../providers/KeyProviders";

const Key = ({ value, dataSet }) => {
  const { randomKey, wrongKey } = useContext(KeyContext);
  return (
    <>
      <button
        className={`${styles.key} ${randomKey === dataSet ? styles.shake : ""}${
          wrongKey === dataSet ? styles.wrong : ""
        }`}
        data-set={dataSet}
      >
        {value}
      </button>
    </>
  );
};

export default Key;
