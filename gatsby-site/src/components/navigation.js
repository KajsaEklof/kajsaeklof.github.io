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
    background: white;
    padding: 1em 2em 0em 1em;
    z-index: 99999;

    @media ${device.mobile} {
      display:none;
    }
  `
  const StyledLink = styled(Link)`
    color: #000000;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-weight: 500;
    margin: 1em;
    position: relative;
    text-decoration: none;

    &:hover {
        color: #e54c14;
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
        background: #fff;
        transition: width 0.4s ease;
        -webkit-transition: width 0.4s ease;
      }
      &:hover:after {
        width: 100%;
        left: 0;
        background: #e54c14;
      } 
  `

  return (
    <Nav>
      <StyledLink
        to="/"
        activeClassName={navigationStyles.active}
      >
        Home
      </StyledLink>
      <StyledLink
        to="/work/"
        activeClassName={navigationStyles.active}
      >
        About me
      </StyledLink>
      <StyledLink
        to="/behind-the-scenes/"
        activeClassName={navigationStyles.active}
      >
        Projects
      </StyledLink>
      <StyledLink
        to="/contact/"
        activeClassName={navigationStyles.active}
      >
        Contact
      </StyledLink>
    </Nav>
  )
}

export default Navigation
