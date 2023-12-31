import { Carousel, Col, Row, Image as Img } from "antd";
import { useRouter } from "next/router";
import React, { use, useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from './id.module.scss';
import CarouselCard from "@/components/CarouselCard";
import PcMobileToggle from "@/components/buttons/PcMobileToggle";
import CardProject from "@/components/CardProject/CardProject";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Head  from "next/head";
import ico from '@/assets/download.ico'


const Id = ({project}) => {
    const [loading, setLoading] = useState(false);
    const ref = useRef();




    
        return (
            loading ? <div>Загрузка</div> :
            <>
                    <Head>
                <title>{project.data.attributes?.name}</title>
                <meta name="description" content='Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.'  />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

                <div>
                    <Row justify={"center"}>
                        <Col xs={22} md={22} xl={16}>
                            <div className={style.projectInfo}>
                                <Fade top>
                                    <Image unoptimized src={`${project.data.attributes?.logo}`} width={100} height={100} alt="image" className={style.projectImage} />
                                </Fade>
                                <div>
                                    <div className={style.projectName}>
                                        <div className={style.paragraph}>
                                            <p className={style.projectNameText}>{project.data.attributes?.name}</p>
                                            <div className={style.lowerTriangle} style={{ backgroundColor: `#${project.data.attributes?.ProjectColor}` }}></div>
                                        </div>
                                        <Link href={`${project.data.attributes.link}`} className={style.link} target="_blank">{project.data.attributes.link}</Link>
                                    </div>
                                    <Fade right>
                                        <ReactMarkdown className={style.projectDescription}>
                                            {project.data.attributes?.description}
                                        </ReactMarkdown>
                                    </Fade>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className={style.vanta}>
                        <div className={style.triangleTransition}></div>
                        <Row style={{ position: "relative", bottom: 140 }} justify={"center"}>
                            <Col xs={22} md={20}>
                                <Fade bottom>
                                    <CarouselCard>
                                        <Carousel
                                            dots={false}
                                            ref={ref}
                                            draggable={false}
                                            swipe={false}
                                            effect="fade"
                                        >
                                            <Image unoptimized width={100} height={100} className={style.phoneImg} src={`${project.data.attributes.mobileimg}`} alt="phone" />
                                            <Image unoptimized width={100} height={100} className={style.pcImg} src={`${project.data.attributes.pcimg}`} alt="pc" />
                                        </Carousel>
                                        <div className={style.button}>
                                            <PcMobileToggle onPc={() => {
                                                //@ts-ignore
                                                ref.current.goTo(0);
                                            }} onMobile={() => {
                                                //@ts-ignore
                                                ref.current.goTo(1);
                                            }
                                            } />
                                        </div>
                                    </CarouselCard>
                                </Fade>
                            </Col>
                        </Row>
                        <Row style={{ position: "relative", bottom: 140 }} justify={"center"}>
                            <Col xs={22} sm={19}>
                                <div className={style.contentCards}>
                                    <div className={style.work}>
                                        <Fade bottom>
                                            <CardProject>
                                                <div className={style.containerName}>
                                                    <p className={style.cardHeader}>Наша работа</p>
                                                    <div className={style.triangle} style={{ backgroundColor: "#D2DC32" }}></div>
                                                </div>
    
                                                <ReactMarkdown className={style.markdown} remarkPlugins={[remarkGfm]}>
                                                    {project.data.attributes?.ourwork}
                                                </ReactMarkdown>
                                            </CardProject>
                                        </Fade>
    
                                    </div>
                                    <div className={style.techInfo}>
                                        <Fade bottom>
                                            <CardProject>
                                                <div className={style.containerName}>
                                                    <p className={style.cardHeader}>Технологии</p>
                                                    <div className={style.triangle} style={{ backgroundColor: "#FAD232" }}></div>
                                                </div>
                                                <ReactMarkdown className={style.markdown}>
                                                    {project.data.attributes?.tech}
                                                </ReactMarkdown>
                                            </CardProject>
                                        </Fade>
                                        <Fade bottom>
                                            <CardProject>
                                                <div className={style.containerName}>
                                                    <p className={style.cardHeader}>Дополнительная информация</p>
                                                    <div className={style.triangle} style={{ backgroundColor: "#BE288C" }}></div>
                                                </div>
                                                <ReactMarkdown className={style.markdown} remarkPlugins={[remarkGfm]}>
                                                    {project.data.attributes?.additional}
                                                </ReactMarkdown>
                                            </CardProject>
                                        </Fade>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                </>
        )

    
}

export default Id;

export async function getStaticPaths() {
    const fetch = await axios.get(`http://127.0.0.1:1337/api/projects`)
    const result = fetch.data;
    console.log("fflggl",result)
    return {
      paths: result.data.map(res => ({
        params: { id: res.id.toString() },
      })),
      fallback: false,
    };
  }
  
  export async function getStaticProps({params}) {
    const results = await axios.get(`http://127.0.0.1:1337/api/projects/${params.id}/?populate=*`)
    const res = results.data;
    return {
      props: {
        project: res
      }
    }
  }
  
  