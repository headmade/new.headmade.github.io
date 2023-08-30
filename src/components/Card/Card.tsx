import React from "react";
import { ReactNode, useState, useEffect } from "react";
import styles from "./Card.module.scss";

const Card = ({
  top = false,
  bottom = false,
  center = true,
  right = false,
  children = [],
}: {
  top?: boolean;
  bottom?: boolean;
  center?: boolean;
  right?: boolean;
  children?: ReactNode;
} = {}) => {
  const [bodyStyle, setBodyStyle] = useState(styles.center);

  useEffect(() => {
    if (center != true) {
      setBodyStyle(styles.left);
    }
  });
  return (
    <div className={styles.big_wrapper}>
      <div className={styles.wrapper}>
        {top ? <div className={styles.top_angle} /> : null}
        <div className={bodyStyle}>{children}</div>
        {bottom ? <div className={styles.bottom_angle} /> : null}
      </div>
      {right ? <div className={styles.right} /> : null}
    </div>
  );
};

export default Card;
