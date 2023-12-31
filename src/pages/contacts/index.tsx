import AdressInfo from "@/components/AdressInfo";
import MapTriangle from "@/components/MapTriangle";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { Row, Col } from "antd";
import React from "react";
import placemark from '@/assets/Placemark.svg'
import styles from './contacts.module.scss'
import Fade from 'react-reveal/Fade';
import Head from "next/head";

const Contacts = () => {
    return (
        <>

            <Head>
                <title>Контакты</title>
                <meta name="description" content='Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <div className={styles.wrapper}>
                <Row justify={"center"}>
                    <Col xs={22} lg={10}>
                        <AdressInfo />
                    </Col>
                    <Col xs={24} lg={14}>
                        <div className={styles.content}>
                            <MapTriangle />
                            <YMaps>
                                <Map className={styles.map} style={{ width: "100%", minHeight: "100%" }} defaultState={{ center: [55.797654, 49.111383], zoom: 17 }}>
                                    <Placemark
                                        geometry={[55.797655, 49.111382]}
                                    />
                                </Map>
                            </YMaps>
                        </div>


                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Contacts;