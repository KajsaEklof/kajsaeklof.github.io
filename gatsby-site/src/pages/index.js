import React, { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../images/Kajsa 5.jpg"
import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../components/componentsStyles/device"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { faCheckSquare, faCoffee } from "@fortawesome/free-solid-svg-icons"

library.add(fab, faCheckSquare, faCoffee)

const IndexPage = () => {
  const Photo = styled.img`
    border-radius: 50%;
    width: 60vw;

    @media ${device.desktop} {
      width: 40vw;
    }
  `
  return (
    <Layout>
      <SEO title="Home" />

      <h1>Hello there</h1>

      <Photo src={Image} />
      <p>
        Hello, I’m Kajsa and I’m a Junior Front-End Developer and Information
        Architect. I have recently completed a bachelor’s degree at the
        University of Borås in Information Architecture with a specialisation in
        Front-End Web Development and I’m now looking for a position as a
        Front-End Developer.</p>
      <p>
        For the last three years I’ve been combining working part time while
        studying as a distance education student. It was during my recent
        studies I wrote my first lines of code, and I have been hooked ever
        since my first Hello World. I am always excited to learn new things and
        have plenty of experience of working in teams, both on-site and remote.
      </p>
      <p>
        I’m originally from Sweden but have been living and working in the UK
        for the last 10+ years.
      </p>
      <p><strong>Tech I enjoy</strong>: HTML5, CSS, JavaScript (ES6), React and Gatsby. </p>
      <p>
        This is my personal website that I'm building using React and{" "}
        <a href="https://www.gatsbyjs.org/" target="_blank">
          Gatsby
        </a>.
      </p>

      <p><Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

export default IndexPage
