import React from "react";
import Router from "next/router";
import { Group } from "@mantine/core";

export default function Button(props: { title: string; link: string }) {
  const handler = (path: any) => {
    Router.push(path);
  };
  return (
    <>
      <Group position="center">
        <button
          onClick={() => handler(`/${props.link}`)}
          className="bg-black text-white rounded-full py-2 px-4"
        >
          {props.title}
        </button>{" "}
      </Group>
    </>
  );
}
