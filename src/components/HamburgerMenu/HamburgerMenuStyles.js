import styled from 'styled-components';
import { colors, breakpoints } from '../../lib/style/theme';
import { NavLink } from 'react-router-dom';

export const WholeScreen = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: white;
  
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerWrapper = styled.div`
  display: grid;
  grid-template-row: repeat(2, 2fr);
  grid-gap: 20px;
  text-align: center;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  font-weight: 600;
`;

export const Hamburger = styled.div`
  width: 25px;
  @media screen and (${breakpoints.desktop}) {
    display: none;
  }
`;

export const HamburgerLine = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 100px;
  background-color: ${colors.darkGrey};
  margin-bottom: 6px;
    &:last-child {
        margin-bottom: 0;
    }
`;