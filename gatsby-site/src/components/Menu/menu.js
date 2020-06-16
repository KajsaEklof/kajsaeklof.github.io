import React from "react"
import { StyledMenu } from "./menu.styled"
import { bool } from "prop-types"
import { Link } from "gatsby"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/" activeClassName="active">
        Home
      </Link>
      <Link to="/projects/" activeClassName="active" >
        Projects
      </Link>
      <Link to="/contact" activeClassName="active">
        Contact
      </Link>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu
