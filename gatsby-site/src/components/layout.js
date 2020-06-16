/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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

const Layout = props => {
  const [open, setOpen] = useState(false)
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
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
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Navigation />
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

// Layout.propTypes = {
//  children: PropTypes.node.isRequired,
// }

export default Layout
