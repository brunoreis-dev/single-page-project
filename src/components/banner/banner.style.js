import styled from 'styled-components';
import colors from '@styles/colors';
import { headings } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import bannerImg from '@public/images/home/banner.png'

export const Section = styled.section`
  background: url('${bannerImg}');
  padding: 204px 0 190px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  ${mediaQuery.largeMobile`
    padding: 150px 0 167px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  `}

  &::after {
    background-color: rgba(0,0,0,0.36);
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-idex:0;
  }
`;

export const Title = styled.h1`
  text-align: center;
  width: 100%;
  ${headings.xlarge(600)};
  color: ${colors.white};
  position: relative;
  z-index:1;
`;
