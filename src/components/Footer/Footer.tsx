import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/logo.svg";
import { Row, Col } from "antd";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      {/* <div className={styles.angle} /> */}
      <div className={styles.wrapper}>
      <Row justify={"center"}>
                <Col flex={"1210px"} xs={22}>
                <div className={styles.component}>
                  <div className={styles.linksWrapper}>
                  <Link href={"/"}>
                    <div className={styles.image_wrapper}>
                      <Image src={logo} alt={"logo"} fill={true} />
                    </div>
                  </Link>
                  <div className={styles.subheaders}>
                    <Link href={"/projects"} className={styles.link}>
                      <p>Проекты</p>
                    </Link>
                    <Link href={"/about"} className={styles.link}>
                      <p>О нас</p>
                    </Link>
                    <Link href={"/contacts"} className={styles.link}>
                      <p>Контакты</p>
                    </Link>
                  </div>
                  
                  </div>
                  <div className={styles.copyright}>
                    <p>Copyright © 2012 - {new Date().getFullYear()}</p>
                  </div>
                </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
