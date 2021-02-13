import styled from 'styled-components';
import { headings } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import colors from '@styles/colors';


export const Section = styled.section`
  padding: 15px 0 48px;

  ${mediaQuery.tablet`
    padding: 40px 0 80px;
  `}
`;

export const Content = styled.div`
  max-width: 876px;
  margin:0 auto;
`;

export const Title = styled.h2`
  ${headings.medium(500)}
  color: ${colors.green500};
  text-align: center;
  margin-bottom: 45px;
  text-transform: uppercase;

  ${mediaQuery.tablet`
    margin-bottom: 88px;
  `}
`;

export const Box = styled.div`
  
`;