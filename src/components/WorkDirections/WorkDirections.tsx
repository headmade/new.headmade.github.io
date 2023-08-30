import React from "react";
import { Row, Col } from "antd";
import styles from "./WorkDirections.module.scss";
import Subheader from "../Subheader";

type direction = {
  header: string;
  list?: string[];
  descriprion?: string;
  color: string;
};

interface Data {
  data: direction[];
  header: string;
}

const WorkDirections = (props: Data) => {
  return (
        <Row justify={"center"}>
          <Col xs={20} sm={20} lg={20} xl={18} flex={'1600px'}>
            <div className={styles.component}>
              <div className={styles.list}>
                <div className={styles.header}>
                  <p>{props.header}</p>
                </div>
                {props.data.map((elem: any, i: number) => (
                  <div className={styles.direction} key={i}>
                    <Subheader
                      text={elem.header}
                      color={elem.color}
                      bold={true}
                    />
                    {elem.list ? (
                      <ul>
                        {elem.list.map((elem: string, i: number) => (
                          <li key={i}>
                            <p>{elem}</p>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {elem.description ? <p>{elem.description}</p> : null}
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
  );
};

export default WorkDirections;
