import styled, {css} from 'styled-components';
import colors from '@styles/colors';
import { body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';

const getBorderRadius = (green, small) => {
  if (green) return '0';
  if (small) return '3px';
  return '12px';
}

const buttonStyles = css`
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ small }) => (small) ? '168px' : '243px'};
  height: 42px;
  border: ${({ green }) => (green) ? `1px solid ${colors.green500}` : `1px solid ${colors.purple500}`};
  color: ${colors.white};
  ${body.xlarge(400)};
  border-radius: ${({ green, small }) => getBorderRadius(green, small)};
  text-transform: uppercase;
  position: relative;
  transition: 0.3s ease-in-out;

  &:after {
    content: '';
    display: ${({ white }) => (white) ? 'none' : 'block'};
    position: absolute;
    background: ${colors.black};
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index:0;
    border-radius: ${({ white, small }) => getBorderRadius(white, small)};
    transition: 0.3s ease-in-out;
    opacity: 0;
  }

  &:hover {
    border-color: ${({ white }) => (white) ? 'rgba(40, 173, 140, 0.6)' : 'none'};
    &:after {
      opacity: 0.2;
    }
  }

  ${mediaQuery.tablet`
    width: ${({ small }) => (small) ? '168px' : '316px'};
    height: ${({ small }) => (small) ? '50px' : '54px'};
  `}
`;

export const ButtonWrapper = styled.button`
  ${buttonStyles}
`;

export const ButtonLink = styled.a`
  ${buttonStyles}
`

export const Text = styled.p`
  z-index:1;
  position: relative;
`


