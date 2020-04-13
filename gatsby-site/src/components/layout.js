/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header";
import "./layout.css";
import layoutStyles from "./layout.module.css";
import Navigation from "./navigation";
import Menu from "./Menu";
import Burger from "./Burger";

  

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

  return (
      <div className={layoutStyles.container}>
      <div>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
      <Navigation />
        <main className={layoutStyles.content}>{props.children}</main>
        <footer>
          © {new Date().getFullYear()} Kajsa Eklöf
        </footer>
      </div>
  )
}

// Layout.propTypes = {
//  children: PropTypes.node.isRequired,
// }

export default Layout;
