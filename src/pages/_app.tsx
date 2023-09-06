import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useEffect, useState } from "react";
import NextNProgress from 'nextjs-progressbar';
import { ClockLoader } from "react-spinners";

const futuris = localFont({
  src: "../fonts/Futuris/futuris.woff2",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {



  useEffect(() => {
    const threeScript = document.createElement("script");
    threeScript.setAttribute("id", "threeScript")
    threeScript.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js")
    threeScript.setAttribute("src", "three.min.js")
    return() => {
      if(threeScript) {
        threeScript.remove
      }
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader');
      if (loader)
        loader.remove();
    }
  }, []);
  
  return (
      <div className={futuris.className}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    
  )
  
}
