import { useEffect, useState } from "react";
import styles from "./StatusBar.module.scss";
import { StatusbarProps } from "./statusbarprops";

export default function StatusBar({ count, onChange, active }: StatusbarProps) {
  const [elements, setElements] = useState([]);

  const context = {
    elements,
    setElements,
  };

  function initCount() {
    let buff: any = [];
    for (let i = 0; i < count; i++) {
      buff.push(i);
    }
    setElements(buff);
  }

  useEffect(initCount, [count]);
  useEffect(initCount, []);

  return (
    <div className={styles.statusBar}>
      {elements.map((_e, i) => {
        return (
          <div
            key={i}
            onClick={onChange.bind(context, i)}
            active={(i === active).toString()}
          ></div>
        );
      })}
    </div>
  );
}
