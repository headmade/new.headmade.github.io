import React from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import styles from "./Main.module.scss";
import MainDescription from "../MainDescription";
import Competencies from "../Competencies";
import { competencies } from "@/assets/competencies/data";
import { description } from "@/assets/mainDescription/data";
import background from "../../assets/main/background.png";
import { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { Zoom } from "react-reveal/Zoom";

const Main = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xc3c3c3,
          shininess: 0.00,
          waveHeight: 14.00,
          waveSpeed: 1.05,
          zoom: 1.8
        })
      );
    }
  }, [vantaEffect]);
  return (
    <div ref={vantaRef}>
      <Row justify={"center"}>
        <div className={styles.angle}>
          <div className={styles.angle_top_first} />
          <div className={styles.angle_top_second} />
        </div>
        <Col lg={20}>
          <Row justify={"center"}>
            <Col xs={22} sm={18} xl={15}>
                <div className={styles.component}>
                  <MainDescription list={description} header={"Кто мы?"} />
                  <Competencies header={"Наши компетенции"} data={competencies} />
                </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>

  );
};

export default Main;
