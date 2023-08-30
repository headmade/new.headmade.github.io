import React from "react";
import { ReactNode } from "react";
import Header from "../Header";
import Footer from "../Footer";

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
