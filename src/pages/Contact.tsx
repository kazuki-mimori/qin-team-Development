import React from "react";
import Contact from "../component/Contact/Contact";
import { Layout } from "../component/Layout";

export default function Blog() {
  return (
    <>
      <Layout children={<Contact />}></Layout>
    </>
  );
}
