import styled from 'styled-components';
import { breakpoints } from '../lib/style/theme';

export const SectionEvents = styled.div`
padding: 64px 15px;
    display: grid;
    row-gap: 48px;
    @media screen and (${breakpoints.mobileLarge}) {
        grid-template-columns: repeat(2, 1fr);
      gap: 32px;
      padding: 80px 32px;
  }
  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
      padding: 80px 0;
      max-width: 930px;
      margin: 0 auto;
  }
  @media screen and (${breakpoints.desktopLarge}) {
      grid-template-columns: repeat(4, 1fr);
      max-width: 1280px;
`;