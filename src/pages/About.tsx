import React from "react";
import About from "../component/About/About";
import { Layout } from "../component/Layout";

export default function Blog() {
  return (
    <>
      <Layout children={<About />}></Layout>
    </>
  );
}
