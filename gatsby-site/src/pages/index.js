import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons";


library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello there</h1>
    <p>I'm Kajsa and I love to code.</p>
    <p>This is my personal website that I'm building using gatsby.</p>
  </Layout>
)

export default IndexPage
