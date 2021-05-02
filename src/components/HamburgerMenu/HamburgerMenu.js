import React, { useState } from 'react';
import {NavItem, Hamburger, HamburgerLine, HamburgerWrapper, WholeScreen} from './HamburgerMenuStyles';


const HamburgerMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Hamburger onClick={() => setShowMenu(!showMenu)}>
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </Hamburger>
      {showMenu && (
        <WholeScreen>
          <HamburgerWrapper>
            <NavItem
              exact
              to='/'
              onClick={() => setShowMenu(!showMenu)}
            >
              Home
            </NavItem>
            <NavItem
              to='/events'
              onClick={() => setShowMenu(!showMenu)}
            >
              Events
            </NavItem>
          </HamburgerWrapper>
        </WholeScreen>
      )}
    </>
  );
};

export default HamburgerMenu;