//route
import React from 'react';
import { NavLink } from 'react-router-dom';
//import logo
import LogoImage from '../../assets/images/logo.png';
//style
import {
    HeaderWrapper,
    Inner,
    Logo,
    LogoContainer,
    Nav,
    NavItem,
    Hamburger,
    HamburgerLine
}from './HeaderStyle';

//links
const links = {
    home: 'Home',
    events: 'Events',
}

//structure Header
const Header = () => {
    return (
        <HeaderWrapper>
            <Inner>
                <LogoContainer to="/home">
                    <Logo src={LogoImage} alt="Logo" />
                </LogoContainer>
                <Hamburger>
                    <HamburgerLine />   
                    <HamburgerLine />
                    <HamburgerLine />
                </Hamburger>
                <Nav>
                    <NavItem exact to="/">Home</NavItem>
                    <NavItem to="/events">Events</NavItem>
                </Nav>
            </Inner>
        </HeaderWrapper>
    );
}

export default Header;