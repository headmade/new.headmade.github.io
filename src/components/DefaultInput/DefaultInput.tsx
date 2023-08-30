import React from "react";
import { Input, ConfigProvider } from "antd";

const DeafaultInput = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          controlOutlineWidth: 0,
          colorErrorOutline: "rgba(0, 0, 0, 0)",
        },
      }}
    >
      <Input />
    </ConfigProvider>
  );
};

export default DeafaultInput;
