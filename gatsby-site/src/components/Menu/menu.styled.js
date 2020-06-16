import styled from "styled-components"
import { device } from "../componentsStyles/device"

export const StyledMenu = styled.nav`
  background: rgb(251, 244, 235, 1);
  display: flex;
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 5em;
  position: absolute;
  right: 0;
  text-align: left;
  top: 0;
  transition: all 0.3s linear;
  transform: translateX(100%);
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  width: 100%;
  z-index: 999999;

  @media ${device.desktop} {
    display: none;
  }

  a {
    color: var(--purple);
    display: block;
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    margin: 1em auto;
    position: relative;
    text-decoration: none;
    
    &:hover:after {
      background: var(--coral);
      content: "";
      display: block;
      height: 3px;
      position: absolute;
      transition: width 0.4s ease;
      -webkit-transition: width 0.4s ease;
      width: 100%;
    }

    &:hover {
      color: var(--coral);
    }
  }
  .active {
    color: var(--coral);
    border-bottom: 3px var(--coral) solid;
  }

  `
