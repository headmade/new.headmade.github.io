import React from "react";
import { Button, ConfigProvider } from "antd";
import Link from "next/link";

// TODO Remove animation (ALL!!)

function GhostButton({
  color = "2D7DC3",
  text = "кнопка",
  goto = "",
  query = ""
}: { color?: string; text?: string; goto?: string, query?: string } = {}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: `${color}`,
          // Instead of boxShadow
          borderRadius: 0,
          controlOutlineWidth: 0,
          colorErrorOutline: "rgba(0, 0, 0, 0)",
          // To remove scale animation
          motionDurationFast: `0s`,
          motionDurationMid: `0s`,
          motionDurationSlow: `0s`,

          opacityLoading: 0,
        },
      }}
    >
      <Link href={{pathname: `${goto}`, query:query}}>
      <Button style={{ transform: "skew(-20deg)" }} block={true}>
        <p style={{ transform: "skew(20deg)" }}>{text}</p>
      </Button>
      </Link>

    </ConfigProvider>
  );
}

export default GhostButton;
