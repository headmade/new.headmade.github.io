import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Row, Col } from "antd";
import { StaticImageData } from "next/image";
import styles from "./ProjectsScroll.module.scss";
import Card from "../Card";
import GhostButton from "../buttons/GhostButton";
import background from "../../assets/projectsScroll/back.png";
import Link from "next/link";
import ArrowButton from "../buttons/ArrowButton";
import axios from "axios";



interface Props {
  header: string;
  projects: any
}

const ProjectsScroll = (props: Props) => {
  const [elemet, setProjects] = useState<any>([]);
  const url = process.env.STRAPI_API
  const [loading, setLoading] = useState(false);
  const heightRef = useRef(null);
  const getProjects = () => {
    setLoading(true)
    axios.get(`${url}/projects/?populate=*`).then((response) => {
      setLoading(false);
      const elements = response.data.data
      setProjects(elements);

    }).finally(() => setLoading(false))
  };
  useEffect(() => getProjects(), []);

  return (
    <Row justify={"center"}>
      <Col span={24}>
        <Image
          src={background}
          alt={`${background}`}
          fill={true}
          style={{ backgroundRepeat: "repeat repeat" }}
        />
        <Row justify={"center"}>
          <Col xs={24}>
            <div className={styles.component}>
              <div className={styles.header}>
                <p>{props.header}</p>
              </div>
              <div className={styles.scroll}>
              {props.projects.map((elem: any, i: number) => (
                        <div  className={styles.elements} key={elem.id}>
                          <Card top={true} bottom={true} center={false}>
                            <div className={styles.image_wrapper}>
                              <Image
                                className={styles.logo}
                                unoptimized={true}
                                src={elem.attributes.logo}
                                alt={`${elem.header}`}
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className={styles.project_header}>
                              <p className={styles.projectName}>{elem.attributes.name}</p>
                            </div>
                            <div className={styles.project_about}>
                              <p>{elem.attributes.shortDescription}</p>
                            </div>
                            <div className={styles.card_button_wrapper}>
                              <div className={styles.card_button}>
                                <GhostButton text={"Подробнее"} goto={`/projects/`+ elem.id}/>
                              </div>
                            </div>
                          </Card>
                        </div>
                    ))}
              </div>
              <div className={styles.button_wrapper}>
                <div className={styles.button}>
                  <ArrowButton text={"Все проекты"} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className={styles.angle} />
      </Col>
    </Row>
  );
};

export default ProjectsScroll;
