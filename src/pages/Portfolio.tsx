import React from "react";
import { Layout } from "../component/Layout";
import Portfolio from "../component/Portfolio/Portfolio";

export default function Blog() {
  return (
    <>
      <Layout children={<Portfolio />}></Layout>
    </>
  );
}
