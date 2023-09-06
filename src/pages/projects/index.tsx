import React, { cache, useLayoutEffect } from "react";
import { Col, Row } from "antd";
import style from './projects.module.scss'
import Areas from "@/components/Projects/Areas";
import styles from "../../components/ProjectsScroll/ProjectsScroll.module.scss";
import pic from '../../assets/areas/image.svg'
import { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Card from "@/components/Card";
import GhostButton from "@/components/buttons/GhostButton";
import Link from "next/link";
import Image from "next/image";
import Fade from 'react-reveal/Fade';
import axios from "axios";
import front from '../../assets/areas/front.svg'
import back from '../../assets/areas/back.svg'
import mobile from '../../assets/areas/mobile.svg'
import design from '../../assets/areas/image.svg'
import Head from "next/head";


const Projects = ({project}) => {
  // const [elemet, setProjects] = useState<any>([]);
  // const url = process.env.STRAPI_API
  const imgUrl = "http://localhost:1337"
  const [loading, setLoading] = useState(false);
  // const heightRef = useRef(null);
  // const getProjects = () => {
  //   setLoading(true)
  //   axios.get(`${url}/projects/?populate=*`).then((response) => {
  //     setLoading(false);
  //     const elements = response.data.data
  //     setProjects(elements);
      
      
  //   }).finally(() => setLoading(false))
  // };
  // useEffect(() => getProjects(), []);

// debugger
  return (
    
    loading ? <div>Загрузка</div>
      :
      <div>
                   <Head>
                <title>Проекты</title>
                <meta name="description" content='Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
        <Row justify={"center"} style={{ minHeight: "100%" }}>
          <Col xs={22} lg={20} style={{ minHeight: "100%" }}>
            <Fade top>
              <h1 className={style.header}>Наши направления</h1>
            </Fade>

            <div className={style.areas}>
              <Fade delay={0} left>
                <Areas name="Дизайн" tech={"UX / UI"} lineColor={'#BE288C'} pic={design} />
              </Fade>
              <Fade delay={200} left>
                <Areas name="Мобильная разработка" tech={"iOS / Android / React Native / Windows / Ionic"} lineColor={'#FAD232'} pic={mobile} />
              </Fade>
              <Fade delay={400} left>
                <Areas name="Frontend" tech={"React / HTML / CSS3 / ES6 / Saas / Angular / CoffeeScript / Backbone"} lineColor={'#2D91CD'} pic={front} />
              </Fade>
              <Fade delay={600} left>
                <Areas name="Backend" tech={"Ruby / Elixir / Node.js / GO / Erlang / C / C++ / MySql / Postgres / MemCache / Redis/ Nats"} lineColor={'#D2DC32'} pic={back} />
              </Fade>



            </div>
          </Col>
        </Row>

        <div style={{ width: "100%" }} className={style.vantacanvas}>
          <div className={style.triangle}></div>
          <div className={style.projects}>
            <Fade bottom>
              <h1 className={style.headerProjects}>Проекты</h1>
            </Fade>

            <Row justify={"center"}>
              <Col xs={22} lg={16}>
                <ResponsiveMasonry
                  columnsCountBreakPoints={{ 320: 1, 768: 2, 992: 3 }}

                >
                  <Masonry gutter={20}>
                    {project.map((elem: any, i: number) => (
                      <Fade key={elem.id} bottom>
                        <div key={elem.id}>
                          <Card top={true} bottom={true} center={false}>
                            <div className={styles.image_wrapper}>
                              <Image
                                className={style.logo}
                                unoptimized={true}
                                src={`${elem.attributes.logo}`}
                                alt={`${elem.header}`}
                                width={100}
                                height={100}
                              />
                            </div>
                            <div className={styles.project_header}>
                              <p className={style.projectName}>{elem.attributes.name}</p>
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
                      </Fade>
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
              </Col>
            </Row>
          </div>
        </div>
      </div>
  )
}

export default Projects;


export async function getStaticProps() {
  const results = await axios.get(`http://127.0.0.1:1337/api/projects/?populate=*`)
  const res = results.data.data;
  return {
    props: {
      project: res,
    }
  }
}
