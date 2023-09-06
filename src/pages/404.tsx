import Image from "next/image";
import Head from "next/head";
import React from "react";
import { blob } from "stream/consumers";
import head from '../assets/hero/logo_head.svg'
import { Row, Col } from "antd";
const Error404 = () => {
    return (
        <>
            <Head>
                <title>Страница не найдена</title>
                <meta name="description" content='Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.' />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
            <Row justify={'center'}>
                <Col xs={22} lg={10}>
                    <div style={{ display: "flex", flexDirection: 'column' }}>
                        <Image unoptimized src={head} style={{ margin: "0 auto", display: 'block', width: "25%", height: 'auto', }} alt="logo" />
                        <h2 style={{ fontWeight: "bold", textAlign: "center", marginTop: 20 }}>Такой страницы не существует</h2>
                    </div>

                </Col>
            </Row>
        </>

    )
}

export default Error404;