import { Space, Text } from "@mantine/core";
import React from "react";

export default function Title(props: { title: string }) {
  return (
    <>
      {" "}
      <Space h="xl" />
      <Text className="text-3xl">{props.title}</Text>
      <Space h="xl" />
      <div className=" border-b-2 divide-gray-200 ..." />
    </>
  );
}
