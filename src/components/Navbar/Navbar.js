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
import { UseScroll } from "../../Hooks/UseScroll";

function Navbar({ toggle }) {
  const { scrollNav, toggleHome } = UseScroll();
  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            with you
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="information"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Information
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="location"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Location
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="service"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Services
              </NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
