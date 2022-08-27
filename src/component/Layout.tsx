import { Space } from "@mantine/core";
import React, { FC } from "react";
import FooterArea from "./Footer/FooterArea";
import HeaderArea from "./Header/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <HeaderArea />
      {children}
      <Space h="xl" />
      <FooterArea />
    </>
  );
};
