import React from "react";
import { Button, ConfigProvider } from "antd";

interface Props {
  color: string;
  text: string;
}

const DefaultButton = ({
  color = "2D7DC3",
  text = "кнопка",
}: { color?: string; text?: string } = {}) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: `${color}`,
          borderRadius: 0,
          colorTextLightSolid:
            `${color}` === "2D7DC3" || `${color}` === "96148C"
              ? "white"
              : "black",
          // boxShadow: `0 ${0} 0 ${'white'}`, DOES'T WORK :(
          // Instead of boxShadow
          controlOutlineWidth: 0,
          colorErrorOutline: "rgba(0, 0, 0, 0)",
          // To remove animation
          motionDurationFast: `0s`,
          motionDurationMid: `0s`,
          motionDurationSlow: `50s`,
          // motionEaseInOut: 'cubic-bezier(0, 0, 0, 0)',

          opacityLoading: 0,

        },
      }}
    >
      <Button type='primary' style={{ transform: "skew(-20deg)" }}>
        <p style={{ transform: "skew(20deg)" }}>{text}</p>
      </Button>
    </ConfigProvider>
  );
};

export default DefaultButton;
