import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, Row, Col, ConfigProvider } from "antd";
import Hamburger from "hamburger-react";

import styles from "./Header.module.scss";
import logo from "../../assets/logo.svg";
import Links from "../Links";

const Header = () => {
  const [isMobile, setIsMobile] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setUserDevice();
  }, []);

  const setUserDevice = () => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", function () {
        let clientWidth = document.documentElement.clientWidth;

        if (clientWidth <= 992) {
          setIsMobile(true);
        } else if (clientWidth > 992) {
          setIsMobile(false);
        }
      });
    }
  };
  setUserDevice();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className={styles.component_wrapper}>
        <Row justify={"center"}>
          <Col flex={"1210px"}>
            <div
              style={{
                zIndex: "3",
                backgroundColor: "white",
                position: "absolute",
                height: "100px",
                width: "100%",
              }}
            />

            <Row justify={"center"}>
              <Col flex={"1210px"} xs={22}>
                <div className={styles.header} style={{ zIndex: "99" }}>
                  <Link href={"/"}>
                    <div className={styles.image_wrapper}>
                      <Image src={logo} alt={"logo"} fill={true} />
                    </div>
                  </Link>

                  <div className={styles.hamburger} style={{ zIndex: 99 }}>
                    <Hamburger size={28} toggled={isOpen} toggle={toggleMenu} />
                  </div>
                  <div className={styles.listDesktop}>
                    <Links />
                  </div>

                </div>

                <Drawer
                  placement="top"
                  open={isOpen}
                  onClose={toggleMenu}
                  closable={false}
                  zIndex={98}
                  height={320}
                >
                  <Links />
                </Drawer>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className={styles.component_wrapper}></div>
    </>
  );
};

export default Header;
