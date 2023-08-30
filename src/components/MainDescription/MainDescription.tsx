import React from "react";
import Card from "../Card";
import styles from "./MainDescription.module.scss";

interface Props {
  header: string;
  list: string[];
}

const MainDescription = (props: Props) => {
  return (
    <Card bottom={true} right={true}>
      <div className={styles.header}>
        <p>{props.header}</p>
      </div>
      <div className={styles.list}>
        {props.list.map((elem: any, i: number) => (
          <div className={styles.paragraph} key={i}>
            <div className={styles.angle} />
            <div className={styles.text}>
              <p>{elem}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default MainDescription;
