import React from "react";
import { Button, ConfigProvider } from "antd";
import styles from './ArrowButton.module.scss'

interface Props {
  color: string;
  text: string;
}

const ArrowButton = ({
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
          // Instead of boxShadow
          controlOutlineWidth: 0,
          colorErrorOutline: "rgba(0, 0, 0, 0)",
          opacityLoading: 0,

          controlHeight: 67,
        },
      }}
    >
      <Button
        type="primary"
        style={{
          clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
        }}
        block={true}
        href="/projects"
        className={styles.button}
      >
        <p>{text}</p>
      </Button>
    </ConfigProvider>
  );
};

export default ArrowButton;
