import React from "react";
import styles from "./App.module.scss";
import Keyboard from "./components/Keyboard/Keyboard";
import KeyProviders from "./providers/KeyProviders";

function App() {
  return (
    <KeyProviders>
      <div className={styles.wrapper}>
        <Keyboard></Keyboard>
      </div>
    </KeyProviders>
  );
}

export default App;
