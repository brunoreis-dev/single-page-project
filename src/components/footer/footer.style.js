import styled from 'styled-components';
import colors from '@styles/colors';
import { body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';

export const Section = styled.section`
  padding: 13px 0 40px;
  background-color: ${colors.purple700};
`;

export const Content = styled.div`
  max-width: 821px;
  margin:0 auto;
`;

export const LogoContainer = styled.div`
  width: 80px;
  margin: 0 auto 16px;

  ${mediaQuery.tablet`
    margin-bottom: 50px;
  `}
`;

export const Logo = styled.img`
   
`;


export const Text = styled.p`
  ${body.xsmall};
  color: ${colors.white}; 
  text-align: center;
  margin-bottom: 12px;

  &:nth-last-child(1) {
    margin-bottom: 0;
  }
`;
