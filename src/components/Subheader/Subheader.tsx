import React, { useState, useEffect } from "react";
import styles from "./Subheader.module.scss";
import Typist from 'react-typist';
const Subheader = ({
  text = "subheader",
  bold = false,
  color = "#96D2EB",
}: { text?: string; bold?: boolean; color?: string } = {}) => {
  const [textStyle, setTextStyle] = useState(styles.thin);
  const [angleStyle, setAngleStyle] = useState(styles.angle_default);
  useEffect(() => {
    if (bold === true) {
      setTextStyle(styles.bold);
    } else {
      setTextStyle(styles.thin);
    }

    if (color === "#2D91CD") {
      setAngleStyle(styles.angle_blue);
    } else if (color === "#BE288C") {
      setAngleStyle(styles.angle_magenta);
    } else if (color === "#FAD232") {
      setAngleStyle(styles.angle_yellow);
    } else if (color === "#D2DC32") {
      setAngleStyle(styles.angle_green);
    } else {
      setAngleStyle(styles.angle_default);
    }
  }, []);

  return (
    <div className={styles.component}>
      <div className={textStyle}>
        <p style={{textAlign: 'start'}}>{text}</p>

      </div>
      <div className={angleStyle} />
    </div>
  );
};

export default Subheader;
