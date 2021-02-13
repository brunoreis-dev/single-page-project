import styled from 'styled-components';
import { headings, body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';
import colors from '@styles/colors';
import image from '@public/images/home/how-it-works.png'
import Button from '@components/button'

export const ButtonModified = styled(Button)`
  margin: 10px auto 0;

  ${mediaQuery.tablet`
    margin: 20px auto 0;
  `}
`;

export const Section = styled.section`
  padding: 48px 0;

  ${mediaQuery.tablet`
    padding: 65px 0 75px;
  `}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const Box = styled.div`
  width: 100%;

  ${mediaQuery.tablet`
    width: 45%;
  `}
`;

export const BoxRight = styled(Box)`
  background-image: url(${image});
  background-position: center;
  width: 100%;
  max-width:286px;
  height: 86px;
  position: absolute;
  top: 54px;
  background-size: contain;
  background-repeat: no-repeat;
  left: 50%;
  transform: translateX(-50%);

  ${mediaQuery.tablet`
    position: unset;
    max-width:none;
    width: 58%;
    height: 451px;
    margin-right: -3%;
    transform: none;
  `}
`;

export const Title = styled.h2`
  ${headings.medium(500)}
  color: ${colors.green500};
  text-align: center;
  margin-bottom: 150px;
  text-transform: uppercase;

  ${mediaQuery.tablet`
    margin-bottom: 41px;
  `}
`;

export const Text = styled.p`
  ${body.xlarge(400)}
  color: ${colors.gray100};
  padding-bottom: 25px;

  ${mediaQuery.tablet`
    padding-bottom: 21px;
  `}
`;
