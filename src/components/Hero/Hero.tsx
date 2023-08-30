import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "./Hero.module.scss";

import logo from "../../assets/hero/logo.svg";
import head from "../../assets/hero/logo_head.svg";
import Subheader from "../Subheader";

const Hero = () => {
  return (
    <Row justify={"center"}>
      <Col flex={"1600px"}>
        <Row justify={"center"}>
          <Col xs={23} sm={20} lg={23} xl={18}>
            <div className={styles.component}>
              <div className={styles.logo_and_text}>
                <div className={styles.logo_wrapper}>
                  <Image src={logo} alt={"head"} fill={true} />
                </div>
                <Subheader text="Development done right"/>
              </div>
              <div className={styles.logo_head_wrapper}>
              <Image className={styles.head} src={head} alt={"head"} fill={true} />
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Hero;
