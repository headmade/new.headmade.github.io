import Head from "next/head";
import { ConfigProvider } from "antd";
import Zoom from 'react-reveal/Zoom';
import Hero from "@/components/Hero";
import Main from "@/components/Main";
import ProjectsScroll from "@/components/ProjectsScroll";
import { projects } from "@/assets/projectsScroll/projects";
import { useEffect, useRef, useState } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import * as THREE from "three";
import { SpringGrid, measureItems } from 'react-stonecutter';
import Fade from 'react-reveal/Fade';
import axios from "axios";

// TODO Head

export default function Home({project}) {

  return (
    <ConfigProvider>
      <Head>
        <title>ООО Хэдмейд, headmade.pro: Headmade LLC</title>
        <meta name="description" content='Headmade - ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "ХЭДМЕЙД" (ООО ХЭДМЕЙД ), Казань, Республика Татарстан, ИНН 1657119572, ОГРН 1121690046411.' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <Fade top>
        <Hero />
        </Fade>
        
        <Main />
        <ProjectsScroll projects={project} header={'Проекты'} />
      </main>
    </ConfigProvider>
  );
}


  export async function getStaticProps() {
    const results = await axios.get(`http://127.0.0.1:1337/api/projects/?populate=*`)
    const res = results.data.data;
    return {
      props: {
        project: res
      }
    }
  }
  