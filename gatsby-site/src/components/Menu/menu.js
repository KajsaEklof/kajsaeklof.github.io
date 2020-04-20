import React from "react"
import { StyledMenu } from "./menu.styled"
import { bool } from "prop-types"
import { Link } from "gatsby"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" >
        Home
      </Link>
      <Link to="/about" >
        About me
      </Link>
      <Link to="/projects/" >
        Projects
      </Link>
      <Link to="/contact">
        Contact
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
