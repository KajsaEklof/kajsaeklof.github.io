import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import layoutStyles from "./layout.module.css"
import Navigation from "./navigation"
import Menu from "./Menu"
import Burger from "./Burger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"
import Img from "gatsby-image"
import Logo from "../images/kajsaekloflogo_background.png"

const Layout = props => {
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query Image {
      file(relativePath: { eq: "kajsaekloflogo_background.png" }) {
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

  const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    margin: 1em 1em 2em 1em;
  `
  return (
    <div className={layoutStyles.container}>
      {/* <div>
         <Burger open={open} setOpen={setOpen} />
         <Menu open={open} setOpen={setOpen} />
      </div>*/}
      <div className={layoutStyles.containerFlex}>
      <img
      className={layoutStyles.logo}
      src={Logo}  
        alt="Portrait of Kajsa Eklof who is sitting at a table with her MacBook woring facing the camera"
      />
      <Navigation />
      </div>
      <main className={layoutStyles.content}>{props.children}</main>
      <Footer>
        {/*<div className={layoutStyles.socialicons}>
          <a href="https://github.com/KajsaEklof" target="_blank" className={layoutStyles.socialicon}>
            <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/kajsa-eklof/" target="_blank" className={layoutStyles.socialicon}>
            <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
          </a>
        </div>*/}
        <p className={layoutStyles.footertext}>
          ©{new Date().getFullYear()} Kajsa Eklöf
        </p>
      </Footer>
    </div>
  )
}

export default Layout
// Layout.propTypes = {
//  children: PropTypes.node.isRequired,
// }
