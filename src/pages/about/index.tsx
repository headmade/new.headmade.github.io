import WorkDirections from "@/components/WorkDirections";
import React from "react";

import { Row, Col } from "antd";
import Subheader from "@/components/Subheader";
import style from './index.module.scss'
import Head from "next/head";
export default function about() {
  return (
    <div>
                         <Head>
                <title>О нас</title>
                <meta name="description" content='Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.'  />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
            </Head>
      <Row justify={"center"}>
        <Col style={{marginBottom: 20}} xs={22} sm={10}>
          <h1 className={style.head}>О нас</h1>
          <div className={style.header}>
            <h1>Основные направления деятельности команды:</h1>
            <div style={{backgroundColor: "#2D91CD"}} className={style.triangle}></div>
          </div>
          <ul>
            <li className={style.list}>разработка web-проектов: интернет-ресурсы и приложения, в т.ч. корпоративные и представительские сайты, информационные порталы, системы и т.д.;</li>
            <li className={style.list}>услуги консалтинга: помощь в разработке и внедрении цепей бизнес-процессов, обеспечивающих существенную оптимизацию деятельности компании;</li>
            <li className={style.list}>IT-project resсue: обеспечение клиента производственными ресурсами с целью доведения конкретного проекта до его логического завершения.</li>
          </ul>

          <div className={style.header}>
            <h1>Услуги консалтинга</h1>
            <div style={{backgroundColor: "#FAD232"}} className={style.triangle}></div>
          </div>

          <ul>
            <li className={style.list}>работа по методологии Agile: Scrum, Kanban, экстремальное программирование и др.;</li>
            <li className={style.list}>помощь и выработка экспертных рекомендаций по выбору подходящих технологий и инструментов разработки;</li>
            <li className={style.list}>UX-проектирование: сбор и анализ требований бизнеса и пользователей, формирование сценариев, прототипирование и т.д.</li>
          </ul>

          <div className={style.header}>
            <h1>IT-project resсue:</h1>
            <div style={{backgroundColor: "#BE288C"}} className={style.triangle}></div>
          </div>
          <p className={style.rescue}>Богатый профессиональный опыт команды Headmade позволяет оперативно разобраться в проблематике проекта Заказчика и восстановить процесс разработки.</p>

          <div className={style.header}>
            <h1>В наших силах исправить:</h1>
            <div style={{backgroundColor: "#D2DC32"}} className={style.triangle}></div>
          </div>
          <ul >
            <li className={style.list}>проекты, попавшие в архитектурный тупик;</li>
            <li className={style.list}>проекты, использующие некорректные технологии и инструменты</li>
            <li className={style.list}>проекты, команда разработки которых распадается</li>
            <li className={style.list}>и другие затянувшиеся проекты</li>
          </ul>
        </Col>
      </Row>

    </div>
  );
}