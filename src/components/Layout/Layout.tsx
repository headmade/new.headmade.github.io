import React, { Suspense, useEffect, useState } from "react";
import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ClockLoader } from "react-spinners";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <div style={{minHeight: '100vh', display: "flex", flexDirection: "column"}}>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
