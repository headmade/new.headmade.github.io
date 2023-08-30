import React, { MouseEventHandler, useState } from "react";
import style from "./PcMobileToggle.module.scss";
import Image from "next/image";
import mobile from "../../../assets/toggle/Tablet.svg";
import pc from "../../../assets/toggle/Desktop.svg";
import { Button, ConfigProvider } from "antd";


interface Props {
  onPc: any;
  onMobile: any
}

const PcMobileToggle = (props: Props) => {
//   const [isDesktopActive, setIsDesktopActive] = useState(true);
//   const [isMobileActive, setIsMobileActive] = useState(false);

  const [styleDesktop, setStyleDesktop] = useState(style.desktopWrapp);
  const [styleMobile, setStyleMobile] = useState(style.mobileWrappInactive);
  const [styleComponent, setStyleComponent] = useState(style.buttonChange);

  const handleDesktop = () => {
    console.log("desktopActive");
    console.log("mobile not active");
    setStyleDesktop(style.desktopWrapp);
    setStyleMobile(style.mobileWrappInactive);
    setStyleComponent(style.buttonChange)
    props.onPc();
  };

  const handleMobile = () => {
    console.log("mobileActive");
    console.log("desktop not active");
    setStyleMobile(style.mobileWrapp);
    setStyleDesktop(style.desktopWrappInactive)
    setStyleComponent(style.buttonActive)
    props.onMobile();
  };

  return (
    
      <ConfigProvider
      theme={{
        token: {
          // colorPrimaryActive: "none"
        },
      }}
    >
      <div className={styleComponent}>
        <div className={style.wrap}>
          <Button
            onClick={handleMobile}
            style={{}}
            className={styleMobile}
            type="link"
          >
            <Image className={style.imageMobile} src={pc} alt="" />
          </Button>
        </div>

        <div className={style.wrap}>
          <Button
            onClick={handleDesktop}
            className={styleDesktop}
            type="link"
          >
            <Image className={style.imageDesktop} src={mobile} alt="" />
          </Button>
        </div>
      </div>
    </ConfigProvider>
    
  );
};

export default PcMobileToggle;
