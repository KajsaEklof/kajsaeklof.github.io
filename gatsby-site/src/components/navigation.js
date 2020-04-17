import React from "react";
import { Link } from "gatsby";
import navigationStyles from "./navigation.module.css";
import styled from "styled-components";
import { device } from "./componentsStyles/device";


const Navigation = props => {
  const Nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: sticky;
    top: 0;
    background: transparent;
    padding: 1em 2em 0em 1em;
    z-index: 99999;

    @media ${device.mobile} {
      display:none;
    }
  `
  const StyledLink = styled(Link)`
    @import url("https://use.typekit.net/kvc0tbm.css");
    color: rgba(28, 1, 53, 1);
    font-family: "futura-pt", Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    font-weight: 700;
    margin: 1em;
    position: relative;
    text-decoration: none;


    &:hover {
        color: rgba(237, 86, 86, 1);
        transition: color 0.4s ease;
        -webkit-transition: color 0.4s ease;
      }
    &:after {
        content: "";
        position: absolute;
        width: 0;
        height: 3px;
        display: block;
        right: 0;
        background: rgba(28, 1, 53, 1);
        transition: width 0.4s ease;
        -webkit-transition: width 0.4s ease;
      }
      &:hover:after {
        width: 100%;
        left: 0;
        background: rgba(237, 86, 86, 1);
      } 
  `
  return (
    <Nav>
      <Link
        to="/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        Home
      </Link>
      <Link
        to="/work/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        About me
      </Link>
      <Link
        to="/projects/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        Projects
      </Link>
      <Link
        to="/contact/"
        className={navigationStyles.navLink}
        activeClassName={navigationStyles.active}
      >
        Contact
      </Link>
    </Nav>
  )
}

export default Navigation
