import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there</h1>
    <p>I'm Kajsa and I love to code.</p>
    <p>This is my personal website that I'm building using gatsby.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
