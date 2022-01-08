import React, { useState, useEffect } from "react";
import { keysBoards, allKeys } from "../data/data";

export const KeyContext = React.createContext({
  keysBoards: {},
  randomKey: "",
  wrongKey: "",
});
const randomLetter = () => allKeys[Math.floor(Math.random() * allKeys.length)];

const KeyProviders = ({ children }) => {
  const [randomKey, setRandomKey] = useState(randomLetter);
  const [wrongKey, setWrongKey] = useState("");

  useEffect(() => {
    const checkKey = (e) => (e.code === randomKey ? setRandomKey(randomLetter) : setWrongKey(e.code));

    const classWrongKey = setTimeout(() => {
      setWrongKey("");
    }, 500);
    document.addEventListener("keydown", checkKey);
    return () => {
      document.removeEventListener("keydown", checkKey);
      clearTimeout(classWrongKey);
    };
  }, [randomKey, wrongKey]);

  return <KeyContext.Provider value={{ keysBoards, randomKey, wrongKey }}>{children}</KeyContext.Provider>;
};

export default KeyProviders;
