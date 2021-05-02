import React from 'react';
import LogoImage from '../../assets/images/logo.png';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem
}from './HeaderStyle';

const Header = () => {
    
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/home">
                    <Logo src={LogoImage} alt="Logo" />
                </LogoContainer>
                <HamburgerMenu></HamburgerMenu>
                <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem to="/events">Events</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;