import styled from 'styled-components';
import colors from '@styles/colors';
import { body } from '@styles/fonts';
import mediaQuery from '@styles/mediaQuery';

export const HeaderWrapper = styled.header`
  padding: 12px 0;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${colors.gray800};
  border-bottom: 2px solid ${colors.green500};
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 50px;

  ${mediaQuery.largeMobile`
    width: 85px;
  `}
`;

export const LogoImg = styled.img`
`;

export const Nav = styled.nav`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  right: ${({ active }) => (active) ? '0' : '-100%'};
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(18, 18, 20, 0.9);
  padding-top: 80px;
  transition: 0.5s ease-in-out;
  z-index: 1;

  ${mediaQuery.largeMobile`
    padding-top: 115px;
  `}
  

  ${mediaQuery.laptop`
    padding-top: 0;
    position: initial;
    height: auto;
    width: auto;
    top: auto;
    right: auto;
    flex-direction: row;
    background: transparent;
  `}
`;

export const MenuLink = styled.button`
  color: ${colors.orange500};
  text-transform: uppercase;
  ${body.large(700)}
  margin-bottom: 40px;
  position: relative;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  background: transparent;
  padding: 0;

  &:after {
    content: '';
    display: block;
    width: ${({ active }) => (active) ? '100%' : '0'};
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors.orange500};
    position: absolute;
    bottom: 0;
    transition: 0.2s ease-in-out;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }

  ${mediaQuery.laptop`
    ${body.large(400)}
    margin-bottom: 0;
    margin-left: 25px;
    color: ${({ active }) => (active) ? `${colors.green500}` : `${colors.orange500}`};

    &:after {
      display: none;
    }

    &:hover {
      color: ${colors.green500};
    }
  `}

  
`;

export const MenuButton = styled.button`
  width: 32px;
  height: 24px;
  position: relative;
  background-color: transparent;
  z-index: 2;

  ${mediaQuery.laptop`
    display: none;
  `}

  span {
    top: ${({ active }) => (active) ? '50%' : '0'};
    transform: ${({ active }) => (active) ? 'translate(-50%, -50%) rotate(45deg)' : 'translateX(-50%)'};
    height: ${({ active }) => (active) ? '4px' : '2px'};

    &:nth-of-type(1) {
      top: ${({ active }) => (active) ? '50%' : '50%'};
      transform: ${({ active }) => (active) ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, -50%)'};
    }

    &:nth-last-child(1) {
      transform: ${({ active }) => (active) ? 'translateX(-50%)' : ''};
      top: ${({ active }) => (active) ? 'auto' : 'auto'};
      width: ${({ active }) => (active) ? '0' : '100%'};
      height: ${({ active }) => (active) ? '2px' : ''};
      bottom: 0;
    }
  }
`;

export const Line = styled.span`
  position: absolute;
  width:100%;
  background: ${colors.green500};
  left: 50%;
  display: block;
  border-radius: 3px;
  transition: 0.5s ease-in-out;
`;
