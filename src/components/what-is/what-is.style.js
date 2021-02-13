import styled from 'styled-components';
import { headings, body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import colors from '@styles/colors';
import Button from '@components/button';

export const ButtonModified = styled(Button)`
  margin: 0 auto;
`;

export const Section = styled.section`
  padding: 60px 0 44px;
`;

export const WhatsIsContent = styled.div`
  max-width: 806px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  ${headings.medium(500)}
  color: ${colors.green500};
  text-align: center;
  margin-bottom: 32px;
  text-transform: uppercase;
  
  ${mediaQuery.largeMobile`
    margin-bottom: 37px;
  `}
`;

export const Text = styled.p`
  ${body.xlarge(400)}
  color: ${colors.gray100};
  padding-bottom: 24px;
`;
