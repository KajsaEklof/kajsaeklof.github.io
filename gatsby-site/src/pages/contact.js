import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Image from "../images/Kajsa4.jpg"
import Layout from "../components/layout"
import layoutStyles from "../components/layout.module.css"
import SEO from "../components/seo"
import styled from "styled-components"
import { device } from "../components/componentsStyles/device"

const Contact = props => {
  const imageData = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "KajsaSquare.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const Alink = styled.a`
    border-bottom: 3px solid var(--coral);
    color: inherit;
    font-weight: bold;
    text-decoration: none;
    width: fit-content;
  `
  const Photo = styled.img`
    border-radius: 50%;
    width: 60vw;

    @media ${device.desktop} {
      width: 40vw;
    }
  `

  return (
    <Layout>
      <SEO title="Contact" />

      <h1>Contact me</h1>

      <p>
        <Alink href="mailto:hello@kajsaeklof.com">hello@kajsaeklof.com</Alink>
      </p>
      <p>
        <Alink href="https://www.linkedin.com/in/kajsa-eklof/" target="_blank">
          LinkedIn
        </Alink>
      </p>
      <p>
        <Alink href="https://github.com/KajsaEklof" target="_blank">
          GitHub
        </Alink>
      </p>

      <Img
      className={layoutStyles.photo}
        fluid={imageData.file.childImageSharp.fluid}
        alt="Portrait of Kajsa Eklof who is sitting at a table with her MacBook woring facing the camera"
      />
    </Layout>
  )
}

export default Contact
