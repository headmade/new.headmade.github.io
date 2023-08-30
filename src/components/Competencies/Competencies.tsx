import React from "react";
import Image from "next/image";
import Card from "../Card";
import styles from "./Competencies.module.scss";
import { StaticImageData } from "next/image";
import Subheader from "../Subheader";

type data = {
  url: StaticImageData;
  header: string;
  about: string;
  color: string;
};

interface Props {
  header: string;
  data: data[];
}

const Competencies = (props: Props) => {
  return (
    <Card bottom={true} right={true}>
      <div className={styles.header}>
        <p>{props.header}</p>
      </div>
      {/* <div className={styles.list}> */}
        {props.data.map((elem: any, i: number) => (
          <div key={elem.id} className={styles.item}>
            <div className={styles.image_wrapper}>
              <Image src={elem.url} alt={"icon"} fill={true} />
            </div>
            <div className={styles.text_wrap}>
              <div className={styles.subheader_wrap}>
                <Subheader text={elem.header} bold={true} color={elem.color} />
              </div>
              <div className={styles.about}>
                <p>{elem.about}</p>
              </div>
            </div>
          </div>
        ))}
      {/* </div> */}
    </Card>
  );
};

export default Competencies;
