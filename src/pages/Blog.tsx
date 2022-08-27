import React from "react";
import BlogContent from "../component/Blog/BlogContent";
import { Layout } from "../component/Layout";

export default function Blog() {
  return (
    <>
      <Layout children={<BlogContent />}></Layout>
    </>
  );
}
