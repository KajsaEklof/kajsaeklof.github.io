import React from "react";
import { Link } from "gatsby";
import Image from "../components/image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Illustration from "../images/illustration.jpg";


const Projects = () => (
  <Layout>
  <SEO title="Projects" />
  <h1>Projects</h1>
  <p>This is where I'll post all the amazing things I'm making.</p>
  <img src={Illustration} alt="Illustration of a women sitting at a table coding on a laptop."/>

  </Layout>
)

export default Projects
