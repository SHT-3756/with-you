import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";
function Navbar({ toggle }) {
  return (
    <div>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">with you</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="gallery">Gallery</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="inforamtion">Inforamtion</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="location">Location</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </div>
  );
}

export default Navbar;
