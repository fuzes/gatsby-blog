import React, { useState } from 'react';
import NavbarLinks from './NavbarLink';
import Logo from '../Logo';
import { Toggle, HamburgerStyle, NavbarContainer, NavboxContainer } from './style';

function Navbar(): JSX.Element {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <NavbarContainer>
      <Logo setNavbarOpen={setNavbarOpen} />
      <Toggle open={navbarOpen} onClick={() => setNavbarOpen(!navbarOpen)}>
        <HamburgerStyle open={navbarOpen} />
      </Toggle>
      <NavboxContainer open={navbarOpen}>
        <NavbarLinks />
      </NavboxContainer>
    </NavbarContainer>
  );
}

export default Navbar;
